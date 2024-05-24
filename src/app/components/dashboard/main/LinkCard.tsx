"use client";

import LinkType from "@/types/LinkType";
import { LuLink } from "react-icons/lu";
import Button from "../../general/Button";

function LinkCard({ link }: { link: LinkType }) {
  return (
    <div className="space-y-5 bg-off-wite rounded-lg p-3">
      {/* header */}
      <div className="flex items-center justify-start gap-3 h-10 border-b-2 py-6">
        <div className="flex items-center justify-start gap-2">
          <LuLink size={24} />
          <span className="font-light text-2xl">{link.shortUrl}</span>
        </div>
        <div className="rounded-md bg-gray/80 w-[3px] h-3/4" />
        <div className="text-2xl font-light text-gray/80">
          <span>Toplam Tıklama :</span>
          <span>{link.Click?.length || 0}</span>
        </div>
      </div>

      {/* inputs */}
      <div className="flex gap-3">
        <input
          className="outline-none border border-light-aqua text-light-aqua font-light text-lg p-2 rounded-lg w-full"
          type="url"
          defaultValue={link.originalUrl}
        />
        <input
          className="outline-none border-none p-2 rounded-lg w-full text-dark-green font-light text-lg"
          type="text"
          defaultValue={link.shortUrl}
        />
      </div>

      {/* date time */}
      <div className="flex gap-2 items-center">
        <span className="font-normal text-xl">Kısaltma Tarihi :</span>
        <div className="space-x-3 text-lg font-light text-black/80">
          <span>{link.createdAt.toLocaleString()}</span>
        </div>
      </div>

      {/* buttons */}
      <div className="w-1/2 flex gap-3">
        <Button
          label="Düzenle"
          className="w-full bg-light-aqua text-white text-lg h-8 rounded-lg"
        />
        <Button
          label="Sil"
          className="w-full bg-Pink text-white text-lg h-8 rounded-lg"
        />
      </div>
    </div>
  );
}

export default LinkCard;
