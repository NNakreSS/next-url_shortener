"use client";

import { useState } from "react";
import axios from "axios";
// components
import Button from "./Button";
// helpers
import linkValidate from "@/helpers/linkValidate";
// links
import { LuLink } from "react-icons/lu";

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

function Shortener() {
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

      const response = await axios.post("/api/link", {
        originalUrl,
        shortUrl,
      });

      setError(null);
      console.log(response.data);
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
      <div className="flex justify-between items-center gap-3 h-10">
        <div className="flex gap-3 border border-light-aqua w-full h-full p-2 justify-start items-center rounded-lg box-border">
          <LuLink className="text-light-aqua" size={20} />
          <input
            placeholder="https://link.nakres.dev/"
            type="url"
            className="outline-none border-none bg-transparent w-full font-light"
            onChange={urlChangeHandler}
          />
        </div>
        <div className="w-2/6 flex gap-3 border border-light-aqua h-full p-2 justify-start items-center rounded-lg box-border">
          <LuLink className="text-light-aqua" size={20} />
          <input
            placeholder="Tag"
            type="url"
            className="outline-none border-none bg-transparent w-full font-light"
            onChange={tagChangeHandler}
          />
        </div>
        <Button
          label="Kısalt"
          className="flex items-center justify-center bg-light-aqua text-white rounded-lg text-2xl px-5 font-normal h-full box-border"
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
