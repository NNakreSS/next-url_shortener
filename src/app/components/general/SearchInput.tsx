"use client";

import { IoMdSearch } from "react-icons/io";

function SearchInput() {
  return (
    <div className="shadow-cover p-2 rounded-lg flex gap-2 items-center justify-between ">
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
