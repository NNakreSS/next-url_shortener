import prisma from "@/libs/prismadb";

/**
 * @param id {String} user identifier
 */
export default async function getUserLinkClicks(id: string) {
  try {
    const Clicks = await prisma.click.findMany({
      where: {
        userId: id,
      },
      orderBy: {
        timestamp: "desc",
      },
      include: {
        link: true,
      },
    });

    return Clicks;
  } catch (error) {
    console.error(error);
    return null;
  }
}
