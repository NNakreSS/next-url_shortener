"use client";

interface InputProps {
  placeholder: string;
  props?: any;
}

function TextInput({ placeholder, ...props }: InputProps) {
  return (
    <label className="w-full flex flex-col bg-white relative rounded-md">
      <input
        {...props}
        className="w-full h-full mt-5 bg-transparent rounded-md p-2 border-none outline-none transition duration-200 font-light text-lg"
        type="text"
      />
      <span className="h-full content-center absolute left-0 top-0 px-2 text-lg font-extralight transition duration-200 input-label">
        {placeholder}
      </span>
    </label>
  );
}

export default TextInput;
