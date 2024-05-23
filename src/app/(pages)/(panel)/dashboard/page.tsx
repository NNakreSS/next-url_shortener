import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getUserClicks from "@/app/actions/getUserClicks";
import getUserLinks from "@/app/actions/getUserLinks";
import LastClickCard from "@/app/components/dashboard/main/LastClickCard";
import LinkManagment from "@/app/components/dashboard/main/LinkManagment";
import TotalCards from "@/app/components/dashboard/main/TotalCards";

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

  console.log(Clicks);
  return (
    <>
      <TotalCards />
      <div className="grid grid-cols-3 gap-5 mb-5">
        <LinkManagment Links={Links} className="col-span-full xl:col-span-2" />
        <div className="col-span-full xl:col-span-1">
          <LastClickCard />
        </div>
      </div>
    </>
  );
}
