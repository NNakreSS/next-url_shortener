"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
//styles
import "@/app/styles/menu.css";
import Navigation from "@/types/NavigationType";
import HamburgerMenu from "./HamburgerMenu";

function Menu({ navigations }: { navigations: Navigation[] }) {
  const pathname = usePathname();

  return (
    <div>
      <nav className="gap-5 text-dark-green font-normal text-2xl hidden md:flex items-center justify-center">
        {navigations.map((menu: any, i: number) => (
          <Link
            key={i}
            className={pathname == menu.path ? "active" : ""}
            href={menu.path}
          >
            {menu.name}
          </Link>
        ))}
      </nav>

      <HamburgerMenu navigations={navigations} />
    </div>
  );
}

export default Menu;
