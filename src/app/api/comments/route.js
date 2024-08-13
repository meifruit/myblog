import { getAuthSession } from "../../utils/auth";
import prisma from "../../utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: { ...(postSlug && { postSlug }) },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (err) {
    console.error("Failed to get comments:", err);
    return new NextResponse(
      JSON.stringify(
        {
          message: "Something went wrong: failed to get all the comments.",
          err: err.message,
        },
        { status: 500 }
      )
    );
  }
};

export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify(
        {
          message: "Not Authenticated.",
        },
        { status: 401 }
      )
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, useEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(comment), { status: 200 });
  } catch (err) {
    console.error("Failed to post comment:", err);
    return new NextResponse(
      JSON.stringify(
        {
          message: "Something went wrong: failed to post comment.",
          err: err.message,
        },
        { status: 500 }
      )
    );
  }
};
