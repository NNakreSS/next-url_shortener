import Image from "next/image";
import React from "react";
// images
import imageHero from "@/assets/images/hero.png";
// fonts
import { kanit } from "@/app/fonts";
import clsx from "clsx";

function Hero() {
  return (
    <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
      <div>
        <Image
          className="object-cover w-3/4 md:w-full m-auto"
          src={imageHero}
          alt="hero images"
        />
      </div>

      <div
        id="hero-texts"
        className="flex flex-wrap justify-center content-center gap-10 items-center w-full"
      >
        <div
          className={clsx(
            kanit.className,
            "flex flex-wrap content-center gap-10 justify-center"
          )}
        >
          <div className="text-5xl md:text-6xl flex flex-wrap items-center justify-center gap-5">
            <h1>
              <span className="text-green mb-5">Link</span>lerini Kısalt
            </h1>
            <h2>Karmaşadan Kurtul</h2>
          </div>
        </div>

        <div>
          <ul className="text-center text-lg md:text-xl font-medium">
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
