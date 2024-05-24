import getLinkFromShortUrl from "@/libs/actions/getLongUrl";
import { PATH_DEFAULT } from "@/libs/routes";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import addClickOnLink from "@/libs/actions/addClickOnLink";

async function page({ params: { tag } }: { params: { tag: string } }) {
  const Link = await getLinkFromShortUrl(tag);
  if (!Link) {
    return redirect(PATH_DEFAULT);
  }

  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  // Cihaz tipini belirle
  const isMobile =
    /(mobile|android|iphone|ipad|ipod|blackberry|opera mini|opera mobi|iemobile|windows phone|kindle|silk-accelerated|webos|ucbrowser)/i.test(
      userAgent
    );
  const deviceType = isMobile ? "mobile" : "desktop";

  addClickOnLink(Link, deviceType);
  return redirect(Link?.originalUrl);
}

export default page;
