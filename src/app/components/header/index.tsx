// components
import clsx from "clsx";
// fonts
import { kanit } from "@/app/fonts";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = async ({ children }: { children: React.ReactNode }) => {
  return (
    <header
      className={clsx(
        "h-20 flex items-center gap-3 justify-between col-span-full py-3 md:pd-10 border-b-2 border-dark-green  px-1 md:px-10 lg:px-40",
        kanit.className
      )}
    >
      {children}
    </header>
  );
};

export { Header, Logo, Menu };
