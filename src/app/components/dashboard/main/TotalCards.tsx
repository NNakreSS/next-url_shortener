"use client";

import TotalCardProps from "@/types/TotalCardType";
import TotalCard from "../../general/TotalCard";
// icons
import { MdAdsClick } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { LuLink } from "react-icons/lu";
import { Click, Link } from "@prisma/client";
import filterTimeStamp from "@/helpers/filterTimeStamp";
import { useDashboard } from "@/contexts/DashboardContext";

function TotalCards() {
  const { Clicks, Links } = useDashboard();

  const lastClicks = filterTimeStamp(Clicks, 5, "timestamp");

  const totals: TotalCardProps[] = [
    {
      label: "Günlük Tıklamalar",
      count: lastClicks.length,
      Icon: MdAdsClick,
      info: "Son 5 gün",
    },
    {
      label: "Toplam Ziyaret",
      count: Clicks?.length || 0,
      Icon: GoProjectSymlink,
    },
    { label: "Toplam Linkler", count: Links?.length || 0, Icon: LuLink },
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
