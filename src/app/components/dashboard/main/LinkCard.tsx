"use client";

import LinkType from "@/types/LinkType";
import { LuLink } from "react-icons/lu";
import Button from "../../general/Button";
import { useState } from "react";
import linkValidate from "@/helpers/linkValidate";

function LinkCard({ link }: { link: LinkType }) {
  const [originalUrl, setOriginalUrl] = useState<string>(link.originalUrl);
  const [shortUrl, setShortUrl] = useState<string>(link.shortUrl);

  const inputHandleShortUrl = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setShortUrl(e.target.value);
  };

  const inputHandleLongUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setOriginalUrl(e.target.value);
  };

  const clickHandleEdit = () => {
    if (originalUrl === link.originalUrl && shortUrl === link.shortUrl) {
      return; // TODO: alert gösterimi yapılacak..
    }

    const validate = linkValidate(originalUrl);
    // TODO : Url Tag için de validate fonksyon eklenmeli
    if (!validate) {
      console.error("Geçersiz Url");
      return;
    }
    try {
    } catch (error) {
      console.log(error);
    }
  };

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
          defaultValue={originalUrl}
          onChange={inputHandleLongUrl}
        />
        <input
          className="outline-none border-none p-2 rounded-lg w-full text-dark-green font-light text-lg"
          type="text"
          defaultValue={shortUrl}
          onChange={inputHandleShortUrl}
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
          onClick={clickHandleEdit}
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
