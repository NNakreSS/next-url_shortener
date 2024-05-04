// components
import Menu from "./Menu";
import User from "./User";

function Header() {
  return (
    <header className="h-20 flex items-center gap-3 justify-between col-span-full py-3 md:pd-10 border-b-2 border-dark-green  px-1 md:px-10 lg:px-40">
      <Menu />
      <User />
    </header>
  );
}

export default Header;
