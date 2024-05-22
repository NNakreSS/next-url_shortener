"use client";

import Pagination from "@/app/components/general/Pagination";
import SearchInput from "@/app/components/general/SearchInput";
import { useState } from "react";

const users = [
  {
    name: "Serkan Burak Atmaca",
    email: "Serlator@gmail.com",
    linkCount: 150,
    date: "12.05.2023",
  },
  {
    name: "Serkan Burak Atmaca",
    email: "Serlator@gmail.com",
    linkCount: 150,
    date: "12.05.2023",
  },
  {
    name: "Serkan Burak Atmaca",
    email: "Serlator@gmail.com",
    linkCount: 150,
    date: "12.05.2023",
  },
  {
    name: "Serkan Burak Atmaca",
    email: "Serlator@gmail.com",
    linkCount: 150,
    date: "12.05.2023",
  },
  {
    name: "Serkan Burak Atmaca",
    email: "Serlator@gmail.com",
    linkCount: 150,
    date: "12.05.2023",
  },
  {
    name: "Serkan Burak Atmaca",
    email: "Serlator@gmail.com",
    linkCount: 150,
    date: "12.05.2023",
  },
  {
    name: "Serkan Burak Atmaca",
    email: "Serlator@gmail.com",
    linkCount: 150,
    date: "12.05.2023",
  },
  {
    name: "Serkan Burak Atmaca",
    email: "Serlator@gmail.com",
    linkCount: 150,
    date: "12.05.2023",
  },
  {
    name: "Serkan Burak Atmaca",
    email: "Serlator@gmail.com",
    linkCount: 150,
    date: "12.05.2023",
  },
  {
    name: "Serkan Burak Atmaca",
    email: "Serlator@gmail.com",
    linkCount: 150,
    date: "12.05.2023",
  },
];

function UsersTable() {
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
              <th>Kullanıcı Adı</th>
              <th>E-mail</th>
              <th>Toplam Link</th>
              <th>Tarih</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.linkCount}</td>
                <td>{user.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTable;
