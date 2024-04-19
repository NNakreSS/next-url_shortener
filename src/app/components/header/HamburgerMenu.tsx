import { Bars3Icon } from "@heroicons/react/24/solid";

const HamburgerMenu = () => {
  return (
    <div className="md:hidden">
      <Bars3Icon className="w-10 h-10 text-dark-green" />
    </div>
  );
};

export default HamburgerMenu;
