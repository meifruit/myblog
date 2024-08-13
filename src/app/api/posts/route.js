import prisma from "../../utils/connect";
import { NextResponse } from "next/server";

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
