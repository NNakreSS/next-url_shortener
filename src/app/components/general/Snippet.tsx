"use client";


import { BiSolidCopy } from "react-icons/bi";

function Snippet({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      {...props}
      className={`${className} bg-off-wite flex items-center justify-between gap-3 p-2 px-4 rounded-lg`}
    >
      {children}{" "}
      <BiSolidCopy
        className="1/12 text-2xl text-green cursor-copy"
        title="Copy to clipboard"
      />
    </div>
  );
}

export default Snippet;
