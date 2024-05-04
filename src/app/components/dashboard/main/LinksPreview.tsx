import { LuLink } from "react-icons/lu";
import LinkCard from "./LinkCard";

const shortLinkData = [
  {
    tag: "discord",
    clickCount: 20,
    originalUrl: "http://discord",
    shortUrl: "link.nakres.dev/",
    shortenedDate: "2024-09-16",
    shortenedTime: "00:58:47",
  },
  {
    tag: "discord",
    clickCount: 20,
    originalUrl: "http://discord",
    shortUrl: "link.nakres.dev/",
    shortenedDate: "2024-09-16",
    shortenedTime: "00:58:47",
  },
  {
    tag: "discord",
    clickCount: 20,
    originalUrl: "http://discord",
    shortUrl: "link.nakres.dev/",
    shortenedDate: "2024-09-16",
    shortenedTime: "00:58:47",
  },
  {
    tag: "discord",
    clickCount: 20,
    originalUrl: "http://discord",
    shortUrl: "link.nakres.dev/",
    shortenedDate: "2024-09-16",
    shortenedTime: "00:58:47",
  },
];

function LinksPreview() {
  return (
    <div className="bg-white p-3 rounded-lg shadow-md space-y-3 max-h-screen overflow-auto">
      {shortLinkData.map((link, i) => (
        <LinkCard key={i} link={link} />
      ))}
    </div>
  );
}

export default LinksPreview;
