import prisma from "../prismadb";

interface params {
  originalUrl: string;
  shortUrl: string;
  uid: string;
}

export const createLink = async ({ originalUrl, shortUrl, uid }: params) => {
  try {
    const Link = await prisma.link.create({
      data: {
        originalUrl,
        shortUrl,
        user: {
          connect: { id: uid },
        },
      },
    });

    return {
      success: true,
      data: {
        link: Link,
        message: "Link created successfully",
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
