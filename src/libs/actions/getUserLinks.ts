import prisma from "@/libs/prismadb";

/**
 * @param id {String} user identifier
 */
export default async function getUserLinks(id: string) {
  try {
    const links = await prisma.link.findMany({
      where: {
        userId: id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        Click: true,
      },
    });

    return links;
  } catch (error) {
    console.error(error);
    return null;
  }
}
