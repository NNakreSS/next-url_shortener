"use client";
import clsx from "clsx";
import Link from "next/link";
// icons
import { AiOutlineUser } from "react-icons/ai";
// types
import currentUser from "@/types/currentUserType";

interface UserProps {
  className?: string;
  currentUser: currentUser | null | undefined;
}

function LoginButton({ className, currentUser }: UserProps) {
  return !currentUser?.name ? (
    <Link
      href="/auth/signin"
      className={clsx(
        "text-white bg-green py-2 px-3 rounded-md text-xl !opacity-100",
        className
      )}
    >
      Giriş Yap
    </Link>
  ) : (
    <Link
      href="/dashboard"
      className="text-white bg-green py-2 px-3 rounded-md text-xl !opacity-100 flex justify-between items-center gap-2 cursor-pointer"
    >
      <AiOutlineUser />
      <span> {currentUser?.name}</span>
    </Link>
  );
}

export default LoginButton;
