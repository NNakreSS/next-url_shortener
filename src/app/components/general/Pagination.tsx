"use client";

import { useState } from "react";

function Pagination() {
  const data = new Array(20).map((_, i: number) => i + 1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 5;

  const start = (currentPage - 1) * limit; // 0 , 5 ,10 , 15
  const end = start + limit; // 5 , 10 , 15 , 20

  const entries = data.slice(start, end);

  return (
    <div className="flex flex-col gap-2 items-center">
      {entries.map((entry) => (
        <p key={entry}>{entry}</p>
      ))}
    </div>
  );
}

export default Pagination;
