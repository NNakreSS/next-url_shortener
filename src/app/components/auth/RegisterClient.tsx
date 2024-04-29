"use client";

import Link from "next/link";
// components
import TextInput from "../general/TextInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

function RegisterClient() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <>
      <h1 className="text-white text-4xl font-medium">Hesap Oluştur</h1>
      <form action="" method="post" className="flex flex-col gap-2">
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
          id="e-mail"
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
