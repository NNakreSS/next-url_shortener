"use client";

import { useState } from "react";
import axios from "axios";
// components
import Button from "./Button";
// helpers
import linkValidate from "@/helpers/linkValidate";
// links
import { LuLink } from "react-icons/lu";
import { toast } from "react-toastify";

// random tag için charlar
const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charLength = char.length;

/**
 * @param {number} len
 * @returns {string}
 * Link kısaltmları için random tag oluşturan bir fonksyon
 **/
const randomTag = (len = 5): string => {
  let result = "";
  for (let i = 0; i <= len; i++) {
    result += char.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
};

function Shortener({ setLinks }: { setLinks?: (prev?: any) => void }) {
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const clickHandle = async () => {
    const validate = linkValidate(originalUrl);
    if (!validate) {
      setError("Geçersiz Url");
      return;
    }

    try {
      if (shortUrl == "") {
        const randTag: string = randomTag();
        setShortUrl(randTag);
      }

      const response = await axios.post("/api/links", {
        originalUrl,
        shortUrl,
      });
      if (setLinks) {
        toast.success("Link kısaltma başarılı", {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setLinks((prev: any) => [response.data.link, ...prev]);
      }
      setError(null);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        const error = err.response.data.error;
        if (error == "Short_URL_Already_Exists") {
          return setError(
            "Bu tag zaten kullanılıyor , lütfen başka bir tane girin"
          );
        }
        setError(error);
      } else {
        setError("Beklenmeyen bir hata ile karşılaşıldı");
      }
    }
  };

  const urlChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOriginalUrl(e.target.value);
  };

  const tagChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShortUrl(e.target.value);
  };

  return (
    <div className="bg-white shadow-cover p-2 rounded-lg box-border space-y-2">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-3 lg:h-10">
        <div className="w-full flex gap-2 flex-col lg:flex-row">
          <div className="flex gap-3 border border-light-aqua w-full p-2 justify-start items-center rounded-lg box-border">
            <LuLink className="text-light-aqua" size={20} />
            <input
              placeholder="https://link.nakres.dev/"
              type="url"
              className="outline-none border-none bg-transparent w-full font-light"
              onChange={urlChangeHandler}
            />
          </div>
          <div className="w-full lg:w-2/6 flex gap-3 border border-light-aqua p-2 justify-start items-center rounded-lg box-border">
            <LuLink className="text-light-aqua" size={20} />
            <input
              placeholder="Tag"
              type="url"
              className="outline-none border-none bg-transparent w-full font-light"
              onChange={tagChangeHandler}
            />
          </div>
        </div>
        <Button
          label="Kısalt"
          className="flex items-center justify-center bg-light-aqua text-white rounded-lg text-2xl px-5 py-2 lg:py-0 font-normal h-full w-full lg:w-1/5 box-border"
          onClick={clickHandle}
        />
      </div>
      {error && (
        <div className="h-auto">
          <span className="text-red-500 font-light">{error}</span>
        </div>
      )}
    </div>
  );
}

export default Shortener;
