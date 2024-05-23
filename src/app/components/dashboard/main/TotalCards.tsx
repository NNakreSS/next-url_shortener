"use client";

import TotalCardProps from "@/types/TotalCardType";
import TotalCard from "../../general/TotalCard";
// icons
import { MdAdsClick } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { LuLink } from "react-icons/lu";

function TotalCards({}) {
  const totals: TotalCardProps[] = [
    {
      label: "Günlük Tıklamalar",
      count: 10,
      Icon: MdAdsClick,
      info: "Son 5 gün",
    },
    { label: "Toplam Ziyaret", count: 200, Icon: GoProjectSymlink },
    { label: "Toplam Linkler", count: 8, Icon: LuLink },
  ];

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

export default TotalCards;
