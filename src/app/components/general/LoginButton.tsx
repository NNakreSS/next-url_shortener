import clsx from "clsx";
import Link from "next/link";

function LoginButton({ className }: { className?: string }) {
  return (
    <Link
      href="/auth/signin"
      className={clsx(
        "text-white bg-green py-2 px-3 rounded-md text-xl !opacity-100",
        className
      )}
    >
      Giriş Yap
    </Link>
  );
}

export default LoginButton;
