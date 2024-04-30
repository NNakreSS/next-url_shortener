"use client";

import Link from "next/link";
// components
import TextInput from "../general/TextInput";
// icons
import { IoIosLock } from "react-icons/io";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginClient() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((cb) => {
      if (cb?.ok) {
        router.push("/dashboard");
        router.refresh();
        console.log("Giriş Başarılı");
      }

      if (cb?.error) {
        console.error(cb.error);
      }
    });
  };

  return (
    <>
      <h1 className="text-white text-4xl font-medium">Giriş Yap</h1>
      <form action="" method="post" className="flex flex-col gap-2">
        <TextInput
          id="e-mail"
          type="email"
          register={register}
          errors={errors}
          placeholder="E-posta"
          required
        />
        <TextInput
          id="password"
          type="password"
          register={register}
          errors={errors}
          placeholder="Şifre"
          required
        />
        <button
          type="submit"
          className="bg-green text-white rounded-md p-2 text-2xl font-medium mt-2"
          onClick={handleSubmit(onSubmit)}
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
    </>
  );
}

export default LoginClient;
