"use client";

import clsx from "clsx";
import { IoMdSearch } from "react-icons/io";

function SearchInput({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "shadow-cover p-2 rounded-lg flex gap-2 items-center justify-between h-10",
        className
      )}
    >
      <IoMdSearch className="text-2xl text-green" />
      <input
        placeholder="İsme göre ara"
        type="search"
        className="h-full w-full border-none outline-none bg-transparent placeholder:font-light"
      />
    </div>
  );
}

export default SearchInput;
