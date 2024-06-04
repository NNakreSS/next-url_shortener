import prisma from "../prismadb";

export const deleteLink = async (id: string) => {
  try {
    const deletedLink = await prisma.link.delete({
      where: { id: id },
    });

    return {
      success: true,
      data: {
        link: deletedLink,
        message: "Link deleted successfully",
      },
    };
  } catch (error) {
    return {
      success: false,
      data: {
        error,
      },
    };
  }
};
