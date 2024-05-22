"use client";
import clsx from "clsx";
import React, { useState } from "react";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface PaginationProps {
  className?: string;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  onPageChange,
  totalPages,
  className,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages: [string | number] = [1];
    const maxPageNumbersToShow = 7;
    const halfMaxPagesToShow = Math.floor(maxPageNumbersToShow / 2);

    // Aktif sayfa ortalarda olduğunda
    if (
      currentPage > halfMaxPagesToShow &&
      currentPage < totalPages - halfMaxPagesToShow
    ) {
      pages.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push("...");
    }
    // Aktif sayfa başlangıç sayfalarda olduğunda
    else if (currentPage <= halfMaxPagesToShow) {
      for (let i = 2; i <= maxPageNumbersToShow - 2; i++) {
        pages.push(i);
      }
      pages.push("...");
    }
    // Aktif sayfa son sayfalarda olduğunda
    else {
      pages.push("...");
      for (
        let i = totalPages - (maxPageNumbersToShow - 3);
        i < totalPages;
        i++
      ) {
        pages.push(i);
      }
    }

    // Bitiş sayfasını ekle
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div
      className={clsx(
        "flex gap-2 items-center justify-evenly bg-white shadow-cover py-1 px-4 rounded-md h-10",
        className
      )}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaArrowLeft />
      </button>
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          className={clsx("w-7 h-7 rounded-md", {
            "bg-green text-white": page === currentPage,
          })}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
