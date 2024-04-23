// icons
import { AiOutlineApi } from "react-icons/ai";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { BiMoneyWithdraw } from "react-icons/bi";
import { SiPagespeedinsights } from "react-icons/si";
// fonts
import { kanit } from "@/app/fonts";
//
import clsx from "clsx";

const ServicesData = [
  {
    title: "API Hizmeti",
    icon: AiOutlineApi,
    text: "Bir API key  edinerek  link kısaltma hizmetini kendi projelerinizde kullanabilirsiniz",
  },
  {
    title: "Yönetim Paneli",
    icon: LuLayoutPanelLeft,
    text: "Yönetim paneli kolaylığı sayesinde linklerinizi düzenli şekilde takip edin , detaylı tıklama takibi sayesinde içeriklerinizi yönetin",
  },
  {
    title: "Ücretsiz Hizmet",
    icon: BiMoneyWithdraw,
    text: "Tüm hizmetlerden ücretsiz bir şekilde yararlanabilirsiniz    ",
  },
  {
    title: "Hız",
    icon: SiPagespeedinsights,
    text: "Hızlı hizmet sayesinde gereksiz zaman kaybından kurtulun",
  },
];

function Services() {
  return (
    <div
      className={clsx(
        kanit.className,
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-white"
      )}
    >
      {ServicesData.map(({ title, text, icon: Icon }, i) => (
        <div key={i} className="flex flex-col gap-5 p-5 bg-Blue rounded-md">
          <Icon className="text-4xl md:text-5xl" />
          <h4 className="text-2xl md:text-3xl font-medium">{title}</h4>
          <p className="text-lg md:text-xl font-light text-off-wite">{text}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
