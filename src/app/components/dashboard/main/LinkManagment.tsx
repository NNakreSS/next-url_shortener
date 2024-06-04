"use client";
import { clsx } from "clsx";
// components
import Shortener from "../../general/Shortener";
import LinksPreview from "./LinksPreview";
import { useDashboard } from "@/contexts/DashboardContext";

function LinkManagment({ className }: { className: string }) {
  const { setLinks, Links } = useDashboard();

  return (
    <section className={clsx(className, "flex flex-col gap-5")}>
      <Shortener setLinks={setLinks} />
      <LinksPreview Links={Links} setLinks={setLinks} />
    </section>
  );
}

export default LinkManagment;
