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
}

function TextInput({
  id,
  placeholder,
  required,
  register,
  errors,
  disabled,
  ...props
}: InputProps) {
  return (
    <label className="w-full flex flex-col bg-white relative rounded-md">
      <input
        disabled={disabled}
        {...register(id, { required })}
        {...props}
        className={clsx(
          "w-full h-full mt-5 bg-transparent rounded-md p-2 border-none outline-none transition duration-200 font-light text-lg",
          errors[id] && "border border-red-500"
        )}
        type="text"
      />
      <span className="h-full content-center absolute left-0 top-0 px-2 text-lg font-extralight transition duration-200 input-label">
        {placeholder}
      </span>
    </label>
  );
}

export default TextInput;
