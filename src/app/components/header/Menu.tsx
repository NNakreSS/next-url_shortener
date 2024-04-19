"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
//styles
import "@/app/styles/menu.css";

function Menu() {
  const pathname = usePathname();

  return (
    <nav className="gap-5 text-dark-green font-normal text-2xl hidden md:flex">
      <Link className={pathname == "/" ? "active" : ""} href="/">
        Anasayfa
      </Link>
      <Link className={pathname == "/contact" ? "active" : ""} href="/contact">
        İletişim
      </Link>
    </nav>
  );
}

export default Menu;
