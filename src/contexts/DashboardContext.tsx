"use client";
import { createContext, useContext, useState } from "react";
// types
import ClickType from "@/types/ClickType";
import LinkType from "@/types/LinkType";

const DashBoardContext = createContext<any>(null);

export const DashboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [Links, setLinks] = useState<LinkType[]>([]);
  const [Clicks, setClicks] = useState<ClickType[]>([]);

  const value = { Links, setLinks, Clicks, setClicks };
  return (
    <DashBoardContext.Provider value={value}>
      {children}
    </DashBoardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashBoardContext);
