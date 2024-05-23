import prisma from "@/libs/prismadb";

/**
 * @param id {String} user identifier
 */
export default async function getUserClicks(id: string) {
  try {
    const links = await prisma.click.findMany({
      where: {
        userId: id,
      },
    });

    return links;
  } catch (error) {
    console.error(error);
    return null;
  }
}
