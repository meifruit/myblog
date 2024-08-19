import prisma from "../../utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "../../utils/auth";
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const category = searchParams.get("category");

  const POST_PER_PAGE = 2;

  const safePage = Math.max(page, 1);
  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (safePage - 1),
    where: {
      ...(category && { catSlug: category }),
    },
  };
  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    console.log(posts);
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify(
        {
          message: "something went wrong: failed to get all the posts.",
          err: err.message,
        },
        { status: 500 }
      )
    );
  }
};

// create a post
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const { title, desc, img, slug, catSlug } = body;

    // Validate required fields
    if (!title || !desc || !slug || !catSlug) {
      return new NextResponse(
        JSON.stringify({ message: "Missing required fields." }, { status: 400 })
      );
    }

    // Check if category exists
    const category = await prisma.category.findUnique({
      where: { slug: catSlug },
    });

    if (!category) {
      return new NextResponse(
        JSON.stringify({ message: "Category not found!" }, { status: 404 })
      );
    }

    // Create the post
    const post = await prisma.post.create({
      data: {
        title,
        desc,
        img,
        slug,
        catSlug,
        useEmail: session.user.email,
      },
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.error("Error creating post:", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
