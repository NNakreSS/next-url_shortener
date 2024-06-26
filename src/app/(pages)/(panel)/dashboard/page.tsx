import LastClickCard from "@/app/components/dashboard/main/LastClickCard";
import LinkManagment from "@/app/components/dashboard/main/LinkManagment";
import TotalCards from "@/app/components/dashboard/main/TotalCards";

export default function Dashboard() {
  return (
    <>
      <TotalCards />
      <div className="grid grid-cols-3 gap-5 mb-5">
        <LinkManagment className="col-span-full xl:col-span-2" />
        <div className="col-span-full xl:col-span-1">
          <LastClickCard />
        </div>
      </div>
    </>
  );
}
