"use client";

import Link from "next/link";
// components
import TextInput from "../general/TextInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function RegisterClient() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post("/api/register", data).then((response) => {
      console.log(response);
      signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      }).then((cb) => {
        if (cb?.ok) {
          router.push("/dashboard");
          router.refresh();
          console.log("Giriş Başarılı");
        }

        if (cb?.error) {
          console.error(cb?.error);
        }
      });
    });
  };

  return (
    <>
      <h1 className="text-white text-4xl font-medium">Hesap Oluştur</h1>
      <form method="post" className="flex flex-col gap-2">
        <TextInput
          id="userName"
          register={register}
          errors={errors}
          required
          type="text"
          placeholder="Kullanıcı Adı"
        />
        <TextInput
          type="email"
          id="email"
          register={register}
          errors={errors}
          required
          placeholder="E-posta"
        />
        <TextInput
          type="password"
          id="password"
          register={register}
          errors={errors}
          required
          placeholder="Şifre"
        />
        <TextInput
          type="password"
          id="passwordagain"
          register={register}
          errors={errors}
          required
          placeholder="Şifre (Tekrar)"
        />
        <button
          type="submit"
          className="bg-green text-white rounded-md p-2 text-2xl font-medium mt-2"
          onClick={handleSubmit(onSubmit)}
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
    </>
  );
}

export default RegisterClient;
