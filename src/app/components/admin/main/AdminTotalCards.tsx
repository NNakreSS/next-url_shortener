"use client";

import TotalCardProps from "@/types/TotalCardType";
import TotalCard from "../../general/TotalCard";
// icons
import { LuLink } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";

const totals: TotalCardProps[] = [
  {
    label: "Toplam Üye",
    count: 350,
    Icon: FaUsers,
  },
  { label: "Toplam Linkler", count: 38, Icon: LuLink },
];

function AdminTotalCards() {
  return (
    <section className="flex flex-col lg:flex-row gap-5 py-5">
      {totals.map((total, index) => (
        <TotalCard
          key={index}
          Icon={total.Icon}
          count={total.count}
          label={total.label}
          info={total?.info}
        />
      ))}
    </section>
  );
}

export default AdminTotalCards;
