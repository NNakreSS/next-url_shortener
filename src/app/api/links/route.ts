import { createLink } from "@/libs/actions";
import { getCurrentUser } from "@/libs/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await req.json();
  const { originalUrl, shortUrl } = body;

  const response = await createLink({
    originalUrl,
    shortUrl,
    uid: currentUser.id,
  });

  const error = response.data.error;
  if (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002" &&
      error.meta?.target === "Link_shortUrl_key"
    ) {
      return NextResponse.json(
        { error: "Short_URL_Already_Exists" },
        { status: 400 }
      );
    } else {
      console.error(error);
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
  } else {
    return NextResponse.json(response.data, { status: 200 });
  }
}

export async function GET() {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser?.role !== "ADMIN") {
    return NextResponse.error();
  }

  const links = await prisma.link.findMany();
  return NextResponse.json(links);
}
