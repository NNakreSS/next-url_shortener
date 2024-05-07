"use client";

import Navigation from "@/types/NavigationType";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const HamburgerMenu = ({
  children,
  navigations,
}: {
  children?: React.ReactNode;
  navigations?: Navigation[];
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const clickHandle = () => setOpen(!open);

  return (
    <div className="md:hidden relative">
      <RxHamburgerMenu
        onClick={clickHandle}
        className="text-5xl text-dark-green cursor-pointer"
      />
      <div
        className={clsx(
          "z-10 transition-all duration-300 ease-in-out overflow-hidden absolute top-20 bg-Blue text-white p-5 rounded-lg w-[90vw]",
          {
            hidden: !open,
            visible: open,
          }
        )}
      >
        <nav className="grid grid-cols-2 gap-2">
          {navigations?.map((menu: any, i: number) => (
            <Link
              key={i}
              className={clsx("flex items-center justify-center p-2", {
                active: pathname == menu.path,
              })}
              href={menu.path}
            >
              {menu.name}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
};

export default HamburgerMenu;
