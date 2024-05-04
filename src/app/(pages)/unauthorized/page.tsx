"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function UnAuthorize() {
  const [time, setTime] = useState<number>(5);
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          router.push("/");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-zinc-200">
      <span className="text-2xl text-red-500">
        Bu sayfaya erişim izniniz yok, {time} saniye içinde ana sayfaya
        yönlendirileceksiniz...
      </span>
    </div>
  );
}

export default UnAuthorize;
