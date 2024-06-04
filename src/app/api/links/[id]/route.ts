import { deleteLink, updateLink } from "@/libs/actions";
import { NextRequest, NextResponse } from "next/server";

interface params {
  params: { id: string };
}

export async function PUT(req: NextRequest, { params }: params) {
  try {
    const linkId = params.id;
    const body = await req.json();
    const { originalUrl, shortUrl } = body;

    if (!linkId || !originalUrl || !shortUrl) {
      return NextResponse.json(
        { error: "Missing required parameters", success: false },
        { status: 400 }
      );
    }

    console.log(linkId, originalUrl, shortUrl);
    const updatedLink = await updateLink({
      originalUrl,
      shortUrl,
      linkId,
    });

    if (updatedLink) {
      return NextResponse.json(updatedLink, { status: 200 });
    } else {
      return NextResponse.json(
        {
          error: "Failed to update the link",
          success: false,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 }
    );
  }
}

export async function DELETE(__: any, { params }: params) {
  try {
    const linkId = params.id;
    const response = await deleteLink(linkId);
    if (response.success) {
      return NextResponse.json(response.data.link, { status: 200 });
    } else {
      return NextResponse.json({ error: response.data.error, status: 500 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 }
    );
  }
}
