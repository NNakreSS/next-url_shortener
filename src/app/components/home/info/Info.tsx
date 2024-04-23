// fonts
import { kanit } from "@/app/fonts";
//
import clsx from "clsx";
// image
import Image from "next/image";
// icons
import { TiTick } from "react-icons/ti";

const infoCards = [
  {
    title: "Kapsamlı API Desteği",
    text: "Özelleştirilmiş API desteği sayesinde link kısaltma hizmetini kolayca kendi projelerinize entegre edebilir , ücretsiz olarak tanımlanan kredinizi kullanarak API hizmetimizi deneyimleyebilirsiniz",
    futures: [
      "Ücretsiz kredi edinin",
      "Size özel API key ile bağlantı sağlayın",
      "API üzerinden linklerinizi kolayca kısaltın",
    ],
    image: null,
  },
  {
    title: "Kolay Yönetim",
    text: "Özelleştirilmiş API desteği sayesinde link kısaltma hizmetini kolayca kendi projelerinize entegre edebilir , ücretsiz olarak tanımlanan kredinizi kullanarak API hizmetimizi deneyimleyebilirsiniz",
    futures: [
      "Ücretsiz kredi edinin",
      "Size özel API key ile bağlantı sağlayın",
      "API üzerinden linklerinizi kolayca kısaltın",
    ],
    image: null,
  },
];

function Info() {
  return (
    <section className={clsx(kanit.className, "flex flex-wrap gap-10 py-12")}>
      {infoCards.map((card, i) => (
        <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <Image
            src={card.image ?? ""}
            alt="Info Card Image"
            className="bg-gray/20 rounded-md min-h-[55vh]"
          />
          <div
            className={clsx({
              "lg:order-first": i % 2 === 0,
            })}
          >
            <div className="flex flex-wrap gap-5">
              <h2 className="text-4xl md:text-6xl font-medium">{card.title}</h2>
              <p className="text-xl md:text-2xl font-light">{card.text}</p>
            </div>
            <hr className="my-5 text-gray" />
            <div className="font-light">
              <ul className="flex flex-col gap-2">
                {card.futures.map((future, i) => (
                  <li key={i} className="w-full flex items-center">
                    <TiTick className="text-green" /> {future}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Info;
