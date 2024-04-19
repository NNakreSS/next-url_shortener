// components
import Logo from "./Logo";
import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";
import LoginButton from "../LoginButton";
import clsx from "clsx";
// fonts
import { kanit } from "@/app/fonts";

const Header = () => {
  return (
    <header
      className={clsx(
        "flex items-center gap-3 justify-between col-span-full py-3 md:pd-10 border-b-2 border-dark-green  px-1 md:px-10 lg:px-40",
        kanit.className
      )}
    >
      <Logo />
      <Menu />
      <LoginButton />
      <HamburgerMenu />
    </header>
  );
};

export default Header;
