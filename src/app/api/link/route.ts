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

  try {
    const Link = await prisma.link.create({
      data: {
        originalUrl,
        shortUrl,
        user: {
          connect: { id: currentUser.id },
        },
      },
    });
    return NextResponse.json(Link);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code == "P2002" && error.meta?.target == "Link_shortUrl_key") {
        return NextResponse.json(
          { error: "Short_URL_Already_Exists" },
          { status: 400 }
        );
      }
    }

    // Genel hatalar için
    console.error("ERROR: ", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
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
