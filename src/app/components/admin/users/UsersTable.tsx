"use client";

import Pagination from "@/app/components/general/Pagination";
import SearchInput from "@/app/components/general/SearchInput";
import Table from "../../general/Table";

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
  return (
    <div className="my-5 space-y-5">
      <div className="flex items-center justify-between">
        <SearchInput />
        <Pagination />
      </div>
      <div className="bg-white rounded-lg shadow-cover overflow-hidden">
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Column>Kullanıcı Adı</Table.Column>
              <Table.Column>E-Posta</Table.Column>
              <Table.Column>Toplam Link</Table.Column>
              <Table.Column>Tarih</Table.Column>
            </Table.Row>
          </Table.Head>

          <Table.Body>
            {users.map((user, i) => (
              <Table.Row key={i}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.linkCount}</Table.Cell>
                <Table.Cell>{user.date}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default UsersTable;
