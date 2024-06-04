import prisma from "../prismadb";
import { Link } from "@prisma/client";

interface Props {
  originalUrl: string;
  shortUrl: string;
  linkId: string;
}

interface response {
  link?: Link;
  success: boolean;
  message?: string;
  error?: string;
}

export const updateLink = async ({
  originalUrl,
  shortUrl,
  linkId,
}: Props): Promise<response> => {
  try {
    const link = await prisma.link.update({
      where: {
        id: linkId,
      },
      data: {
        originalUrl,
        shortUrl,
      },
    });
    return { link, success: true, message: "Link updated" };
  } catch (error) {
    console.error(error);
    return { success: false, error: error as string };
  }
};
