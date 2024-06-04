"use client";

import React, { useEffect } from "react";
import TotalCards from "./main/TotalCards";
import LinkManagment from "./main/LinkManagment";
import LastClickCard from "./main/LastClickCard";
import LinkType from "@/types/LinkType";
import { DashboardProvider, useDashboard } from "@/contexts/DashboardContext";
import { Click } from "@prisma/client";
import ClickType from "@/types/ClickType";

interface props {
  Clicks: Click[];
  Links: LinkType[] | null;
}

function DashboardClient({ Clicks, Links }: props) {
  const { setLinks, setClicks } = useDashboard();

  useEffect(() => {
    setLinks(Links);
    setClicks(Clicks);
  }, [Clicks, Links]);

  //? Prop geçilmesi gerekiyor çünkü bu componentlar admin tarafında da bağımsız şekilde kullanılabilmeli
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

function ProvideDashboard({ Clicks, Links }: props) {
  return (
    <DashboardProvider>
      <DashboardClient Clicks={Clicks} Links={Links} />
    </DashboardProvider>
  );
}

export default ProvideDashboard;
