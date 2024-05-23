import getLinkFromShortUrl from "@/app/actions/getLongUrl";
import { PATH_DEFAULT } from "@/libs/routes";
import { redirect } from "next/navigation";
async function page({ params: { tag } }: { params: { tag: string } }) {
  const Link = await getLinkFromShortUrl(tag);
  if (!Link) {
    return redirect(PATH_DEFAULT);
  }
  return redirect(Link?.originalUrl);
}

export default page;
