"use client";

import LinkType from "@/types/LinkType";
import { LuLink } from "react-icons/lu";
import Button from "../../general/Button";
import { useState } from "react";
import linkValidate from "@/helpers/linkValidate";
import axios from "axios";
import { Link } from "@prisma/client";
import { toast } from "react-toastify";

interface props {
  link: LinkType;
  setLinks?: (prev?: any) => void;
}

type toastType = "success" | "error" | "warning";

function LinkCard({ link, setLinks }: props) {
  const [originalUrl, setOriginalUrl] = useState<string>(link.originalUrl);
  const [shortUrl, setShortUrl] = useState<string>(link.shortUrl);

  const notify = (type: toastType, message: string) =>
    toast[type](message, {
      position: "top-right",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const inputHandleShortUrl = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setShortUrl(e.target.value);
  };

  const inputHandleLongUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setOriginalUrl(e.target.value);
  };

  const clickHandleEdit = async () => {
    if (originalUrl === link.originalUrl && shortUrl === link.shortUrl) {
      console.log("Edit link", link.originalUrl);
      notify("warning", "Önce bir değişiklik yapmalısın");
      return;
    }

    const validate = linkValidate(originalUrl);
    if (!validate) {
      notify("error", "Geçersiz URL");
      return;
    }

    const { data } = await axios.put("api/links/" + link.id, {
      originalUrl: originalUrl,
      shortUrl: shortUrl,
    });

    if (data.success) {
      setLinks?.((prev: Link[]) => {
        const newLinks = [...prev];
        const index = newLinks.findIndex((l) => l.id === link.id);
        newLinks[index] = data.link;
        return newLinks;
      });
      notify("success", "Güncelleme başarılı");
    } else {
      notify("error", "Bir hata meydana geldi");
    }

    try {
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandleDelete = async () => {
    if (!window.confirm("Bu linki silmek istediğinize emin misiniz?")) {
      return;
    }
    const { data } = await axios.delete("api/links/" + link.id);

    if (!data.error) {
      setLinks?.((prev: Link[]) => {
        const newLinks = [...prev];
        const index = newLinks.findIndex((l) => l.id === link.id);
        newLinks.splice(index, 1);
        console.log(newLinks);
        return newLinks;
      });

      notify("success", "Link başarıyla silindi");
    } else {
      notify("error", data.message);
    }
  };

  return (
    <div className="space-y-5 bg-off-wite rounded-lg p-3">
      {/* header */}
      <div className="flex items-center justify-start gap-3 h-10 border-b-2 py-6">
        <div className="flex items-center justify-start gap-2">
          <LuLink size={24} />
          <span className="font-light text-xl lg:text-2xl">
            {link.shortUrl}
          </span>
        </div>
        <div className="rounded-md bg-gray/80 w-[3px] h-3/4" />
        <div className="text-lg lg:text-2xl font-light text-gray/80">
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
          className="outline-none border-none p-2 rounded-lg w-1/2 lg:w-full text-dark-green font-light text-lg"
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
      <div className="w-full lg:w-1/2 flex gap-3">
        <Button
          label="Düzenle"
          className="w-full bg-light-aqua text-white text-lg h-8 rounded-lg"
          onClick={clickHandleEdit}
        />
        <Button
          label="Sil"
          className="w-full bg-Pink text-white text-lg h-8 rounded-lg"
          onClick={clickHandleDelete}
        />
      </div>
    </div>
  );
}

export default LinkCard;
