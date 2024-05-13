import AdminTotalCards from "@/app/components/admin/main/AdminTotalCards";
import LastLinksCard from "@/app/components/admin/main/LastLinks";
import LastUsersCard from "@/app/components/admin/main/LastUsers";
import LastClickCard from "@/app/components/dashboard/main/LastClickCard";

export default function Admin() {
  return (
    <>
      <AdminTotalCards />
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-5">
        <LastLinksCard />
        <LastClickCard />
        <LastUsersCard />
      </section>
    </>
  );
}
