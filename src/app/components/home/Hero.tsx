import Image from "next/image";
import React from "react";
// images
import imageHero from "@/assets/images/hero.png";
// fonts
import { kanit } from "@/app/fonts";
import clsx from "clsx";

function Hero() {
  return (
    <section className="py-12 grid grid-cols-2 gap-5">
      <Image
        className="object-cover"
        width={560}
        height={550}
        src={imageHero}
        alt="hero images"
      />

      <div
        className={clsx(
          kanit.className,
          "flex flex-wrap content-center gap-10 justify-center h-full w-full "
        )}
      >
        <div className="text-6xl flex flex-wrap items-center justify-center gap-5">
          <h1>
            <span className="text-green mb-5">Link</span>lerini Kısalt
          </h1>
          <h2>Karmaşadan Kurtul</h2>
        </div>

        <div>
          <ul className="text-center text-xl">
            <li>Linklerinizi istediğiniz gibi kısaltın</li>
            <li>Kısalttığınız linkleri kolayca yönetin</li>
            <li>Tıklama sayılarını takip edin</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
