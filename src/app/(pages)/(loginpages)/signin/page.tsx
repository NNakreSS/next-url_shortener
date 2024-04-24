import TextInput from "@/app/components/TextInput";
import Link from "next/link";
// icons
import { IoIosLock } from "react-icons/io";

export default function SignIn() {
  return (
    <div className="bg-Blue flex flex-col gap-5 mx-auto px-5 py-10 rounded-md w-full md:w-4/5 lg:w-2/5 my-5">
      <h1 className="text-white text-4xl font-medium">Giriş Yap</h1>
      <form action="" method="post" className="flex flex-col gap-2">
        <TextInput placeholder="E-posta" />
        <TextInput placeholder="Şifre" />
        <button
          type="submit"
          className="bg-green text-white rounded-md p-2 text-2xl font-medium mt-2"
        >
          Giriş Yap
        </button>
      </form>

      <button className="flex items-center gap-2 w-auto my-5">
        <IoIosLock className="text-green text-2xl" />
        <span className="text-base font-extralight text-white">
          Şifremi Unuttum
        </span>
      </button>

      <div className="flex flex-col gap-2">
        <h2 className="text-white text-2xl font-medium">Üye değil misin ?</h2>
        <Link
          href="/signup"
          className="bg-white w-full rounded-md p-2 text-lg font-medium text-center"
        >
          Hesap Oluştur
        </Link>
      </div>
    </div>
  );
}
