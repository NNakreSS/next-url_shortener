import clsx from "clsx";
// fonts
import { kanit } from "@/app/fonts";

function WhoWeAre() {
  return (
    <div className={clsx(kanit.className, "flex flex-wrap gap-5")}>
      <h2 className="text-4xl md:text-6xl font-medium">Biz Kimiz ?</h2>
      <p className="text-xl md:text-2xl font-light">
        Link kısaltma hizmetini esnek bir şekilde sunmak ve API desteği ile
        kullanıcıların kendi sistemlerini inşa etmesine izin vermeyi amaçlamış,
        NakreS Development tarafından oluşturulmuş bir kuruluş olarak hizmet
        vermeye devam etmekteyiz
      </p>
    </div>
  );
}

export default WhoWeAre;
