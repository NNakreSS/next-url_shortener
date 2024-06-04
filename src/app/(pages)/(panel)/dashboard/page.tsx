import { getCurrentUser } from "@/libs/actions/getCurrentUser";
import { getUserLinkClicks, getUserLinks } from "@/libs/actions";
import DashboardClient from "@/app/components/dashboard/DashboardClient";
import LinkType from "@/types/LinkType";
import { Click } from "@prisma/client";

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

  const Links = (await getUserLinks(currentUser?.id)) as LinkType[];
  const Clicks = (await getUserLinkClicks(currentUser?.id)) as Click[];
  return <DashboardClient Clicks={Clicks} Links={Links} />;
}
