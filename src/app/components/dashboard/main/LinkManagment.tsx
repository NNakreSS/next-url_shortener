import { clsx } from "clsx";
// components
import Shortener from "../../general/Shortener";
import LinksPreview from "./LinksPreview";

interface LinkManagmentProps {
  className?: string;
}

function LinkManagment({ className }: LinkManagmentProps) {
  return (
    <div className={clsx(className, "flex flex-col gap-5")}>
      <Shortener />
      <LinksPreview />
    </div>
  );
}

export default LinkManagment;
