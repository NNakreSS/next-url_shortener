"use client";

import { clsx } from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  placeholder: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  type?: string;
}

function TextInput({
  id,
  placeholder,
  required,
  register,
  errors,
  disabled,
  type,
  ...props
}: InputProps) {
  return (
    <label
      className={clsx(
        "w-full flex flex-col bg-white relative rounded-md",
        errors[id] && "border-2 border-red-500"
      )}
    >
      <input
        placeholder=""
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        {...props}
        className="w-full h-full mt-5 bg-transparent rounded-md p-2 border-none outline-none transition duration-200 font-light text-lg"
      />
      <span
        className={clsx(
          "h-full content-center absolute left-0 top-0 px-2 text-lg font-extralight transition duration-200 input-label valid"
        )}
      >
        {placeholder}
      </span>
    </label>
  );
}

export default TextInput;
