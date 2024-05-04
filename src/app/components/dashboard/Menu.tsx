"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
//styles
import "@/app/styles/menu.css";
import { DASHBOARD_API, PATH_DASHBOARD } from "@/libs/routes";

function Menu() {
  const pathname = usePathname();

  return (
    <nav className="gap-5 text-dark-green font-normal text-2xl hidden md:flex items-center justify-center">
      <Link
        className={pathname == PATH_DASHBOARD ? "active" : ""}
        href={PATH_DASHBOARD}
      >
        İstatistikler
      </Link>
      <Link
        className={pathname == DASHBOARD_API ? "active" : ""}
        href={DASHBOARD_API}
      >
        API Anahtarı
      </Link>
    </nav>
  );
}

export default Menu;
