"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="text-4xl text-dark-green font-extrabold h-full  items-center justify-center cursor-pointer hidden lg:flex"
    >
      Logo
    </div>
  );
};

export default Logo;
