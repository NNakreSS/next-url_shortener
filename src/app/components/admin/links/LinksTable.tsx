"use client";

import Pagination from "@/app/components/general/Pagination";
import SearchInput from "@/app/components/general/SearchInput";
import { useState } from "react";
import "@/app/styles/table.css";

const links = [
  {
    url: "https://www.google.com/search",
    tag: "google",
    user: "Serkan Burak Atmaca",
    date: "12.05.2023",
    clickCount: 20,
  },
  {
    url: "https://www.google.com/search",
    tag: "google",
    user: "Serkan Burak Atmaca",
    date: "12.05.2023",
    clickCount: 20,
  },
  {
    url: "https://www.google.com/search",
    tag: "google",
    user: "Serkan Burak Atmaca",
    date: "12.05.2023",
    clickCount: 20,
  },
  {
    url: "https://www.google.com/search",
    tag: "google",
    user: "Serkan Burak Atmaca",
    date: "12.05.2023",
    clickCount: 20,
  },
  {
    url: "https://www.google.com/search",
    tag: "google",
    user: "Serkan Burak Atmaca",
    date: "12.05.2023",
    clickCount: 20,
  },
  {
    url: "https://www.google.com/search",
    tag: "google",
    user: "Serkan Burak Atmaca",
    date: "12.05.2023",
    clickCount: 20,
  },
  {
    url: "https://www.google.com/search",
    tag: "google",
    user: "Serkan Burak Atmaca",
    date: "12.05.2023",
    clickCount: 15,
  },
  {
    url: "https://www.google.com/search",
    tag: "google",
    user: "Serkan Burak Atmaca",
    date: "12.05.2023",
    clickCount: 20,
  },
];

function LinksTable() {
  const [currentPage, setPage] = useState(1);

  return (
    <div className="my-5 space-y-5">
      <div className="flex lg:flex-row flex-col items-center justify-between gap-2">
        <SearchInput className="w-full lg:w-auto" />
        <Pagination
          className="w-full lg:w-auto"
          currentPage={currentPage}
          onPageChange={setPage}
          totalPages={30}
        />
      </div>
      <div className="overflow-auto shadow-cover rounded-md p-2 bg-white">
        <table>
          <thead>
            <tr>
              <th>Url</th>
              <th>Tag</th>
              <th>Kullanıcı</th>
              <th>Toplam Tıklama</th>
              <th>Tarih</th>
            </tr>
          </thead>
          <tbody>
            {links.map((link, i) => (
              <tr key={i}>
                <td>{link.url}</td>
                <td>{link.tag}</td>
                <td>{link.user}</td>
                <td>{link.clickCount}</td>
                <td>{link.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LinksTable;
