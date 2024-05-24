import prisma from "../prismadb";
import { Link } from "@prisma/client";

export default async function addClickOnLink(
  Link: Link | string,
  device: "mobile" | "desktop"
) {
  if (typeof Link !== "string") {
    await prisma.click.create({
      data: {
        device: device,
        linkId: Link.id,
        userId: Link.userId,
      },
    });
  }
}
