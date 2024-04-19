import Logo from "./Logo";
import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";
import LoginButton from "../LoginButton";

const Header = () => {
  return (
    <div className="flex items-center gap-3 justify-between col-span-full p-3 md:pd-10">
      <Logo />
      <Menu />
      <LoginButton />
      <HamburgerMenu />
    </div>
  );
};

export default Header;
