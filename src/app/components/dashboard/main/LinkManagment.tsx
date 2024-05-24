"use client";

import { clsx } from "clsx";
// components
import Shortener from "../../general/Shortener";
import LinksPreview from "./LinksPreview";
import LinkType from "@/types/LinkType";

interface LinkManagmentProps {
  className?: string;
  Links: LinkType[] | null;
}

function LinkManagment({ className, Links }: LinkManagmentProps) {
  return (
    <section className={clsx(className, "flex flex-col gap-5")}>
      <Shortener />
      <LinksPreview Links={Links} />
    </section>
  );
}

export default LinkManagment;
