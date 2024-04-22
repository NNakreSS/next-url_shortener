import { kanit } from "@/app/fonts";
import clsx from "clsx";
import React from "react";

const Footer = () => {
  return (
    <footer
      className={clsx(
        kanit.className,
        "h-20 flex col-span-full justify-center items-center border-t-2 border-dark-green"
      )}
    >
      <div className="flex flex-col justify-center items-center font-thin">
        <span>&copy; 2024 nkLink Tüm hakları saklıdır</span>
        <p>
          nkLink {" "}
          <span className="font-medium text-dark-green">
            NakreS Development
          </span>{" "}
          tarafından geliştirilmiştir.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
