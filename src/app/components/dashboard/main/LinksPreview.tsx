import LinkCard from "./LinkCard";
import LinkType from "@/types/LinkType";

interface props {
  Links: LinkType[] | null;
  setLinks?: (prev?: any) => void;
}

function LinksPreview({ Links, setLinks }: props) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-cover space-y-3 max-h-screen overflow-auto">
      {Links?.map((link, i) => (
        <LinkCard key={i} link={link} setLinks={setLinks} />
      ))}
    </div>
  );
}

export default LinksPreview;
