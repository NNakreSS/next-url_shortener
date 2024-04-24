import TextInput from "@/app/components/TextInput";
import Link from "next/link";
// icons
import { IoIosLock } from "react-icons/io";

export default function SignUp() {
  return (
    <div className="bg-Blue flex flex-col gap-5 mx-auto px-5 py-10 rounded-md w-full md:w-4/5 lg:w-2/5 my-5">
      <h1 className="text-white text-4xl font-medium">Hesap Oluştur</h1>
      <form action="" method="post" className="flex flex-col gap-2">
        <TextInput placeholder="Kullanıcı Adı " />
        <TextInput placeholder="E-posta" />
        <TextInput placeholder="Şifre" />
        <TextInput placeholder="Şifre (Tekrar)" />
        <button
          type="submit"
          className="bg-green text-white rounded-md p-2 text-2xl font-medium mt-2"
        >
          Kayıt Ol
        </button>
      </form>

      <div className="flex flex-col gap-2">
        <h2 className="text-white text-2xl font-medium">Zaten üye misin ?</h2>
        <Link
          href="/signin"
          className="bg-white w-full rounded-md p-2 text-lg font-medium text-center"
        >
          Giriş Yap
        </Link>
      </div>
    </div>
  );
}
