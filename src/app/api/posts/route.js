import prisma from "../../utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "../../utils/auth";
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const category = searchParams.get("category");

  const POST_PER_PAGE = 3;

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

export const POST = async (req) => {
  const session = await getAuthSession();
  // utils/slugGenerator.js
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();

    // Ensure all required fields are present
    if (!body.title || !body.desc || !body.catSlug) {
      return new NextResponse(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    const slug = generateSlug(body.title);
    const post = await prisma.post.create({
      data: {
        ...body,
        slug,
        useEmail: session.user.email, // Ensure this is valid
      },
    });

    return new NextResponse(JSON.stringify({ post }), { status: 200 });
  } catch (err) {
    console.error("Error creating post:", err); // Log the error
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!", error: err.message }),
      { status: 500 }
    );
  }
};
