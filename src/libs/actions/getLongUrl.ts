import prisma from "@/libs/prismadb";
/**
 * Parametre olarak belirtilen shortUrl üzerinden db üzerinde arama yaparak varsa ilgili originalUrl değerini dönderir
 *
 * @param shortUrl
 * @returns long url
 */

export async function getLinkFromShortUrl(shortUrl: string) {
  const originalUrl = await prisma.link.findFirst({
    where: {
      shortUrl: shortUrl,
    },
  });
  return originalUrl;
}
