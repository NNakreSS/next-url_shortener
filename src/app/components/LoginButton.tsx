import clsx from "clsx";
import React from "react";

function LoginButton({ className }: { className?: string }) {
  return (
    <button
      className={clsx(
        "text-white bg-green py-2 px-3 rounded-md text-xl",
        className
      )}
    >
      Giriş Yap
    </button>
  );
}

export default LoginButton;
