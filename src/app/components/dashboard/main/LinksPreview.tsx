"use client";
import LinkCard from "./LinkCard";
import LinkType from "@/types/LinkType";

function LinksPreview({ Links }: { Links: LinkType[] | null }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-cover space-y-3 max-h-screen overflow-auto">
      {Links?.map((link, i) => (
        <LinkCard key={i} link={link} />
      ))}
    </div>
  );
}

export default LinksPreview;
