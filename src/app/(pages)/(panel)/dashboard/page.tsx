import { getCurrentUser } from "@/libs/actions/getCurrentUser";
import getUserClicks from "@/libs/actions/getUserLinkClicks";
import getUserLinks from "@/libs/actions/getUserLinks";
import LastClickCard from "@/app/components/dashboard/main/LastClickCard";
import LinkManagment from "@/app/components/dashboard/main/LinkManagment";
import TotalCards from "@/app/components/dashboard/main/TotalCards";
import LinkType from "@/types/LinkType";

export default async function Dashboard() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <div>
        <span className="text-red-500">
          Bir sorun oluştu , Kullanıcı verilerine erişilemiyor
        </span>
      </div>
    );
  }

  const Links = await getUserLinks(currentUser?.id);
  const Clicks = await getUserClicks(currentUser?.id);
  return (
    <>
      <TotalCards Clicks={Clicks} Links={Links} />
      <div className="grid grid-cols-3 gap-5 mb-5">
        <LinkManagment
          Links={Links as LinkType[]}
          className="col-span-full xl:col-span-2"
        />
        <div className="col-span-full xl:col-span-1">
          <LastClickCard Clicks={Clicks} />
        </div>
      </div>
    </>
  );
}
