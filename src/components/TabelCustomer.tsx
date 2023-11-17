import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useCompareValues from "../utils/useCompareValues";
import useSortCustomer from "../globalState/useSortCustomer";

export default function TabelCustomer() {
  // TODO get data
  const [initialData] = useState([
    {
      id: "1",
      username: "user1",
      email: "example@examplemail.com",
      namaLengkap: "Panjul Aselole",
      telepon: "0852671876343",
      instansi: "Udinus Jaya",
      alamat: "Jalan Kenangan Mantan",
    },
    {
      id: "2",
      username: "user1",
      email: "example@examplemail.com",
      namaLengkap: "Jolitos Kurniawan",
      telepon: "0852671876343",
      instansi: "Poltekkes",
      alamat: "Jalan Kenangan Mantan",
    },
    {
      id: "3",
      username: "user1",
      email: "example@examplemail.com",
      namaLengkap: "Naomi Sinaga",
      telepon: "0852671876343",
      instansi: "Undip",
      alamat: "Jalan Kenangan Mantan",
    },
    {
      id: "4",
      username: "user1",
      email: "example@examplemail.com",
      namaLengkap: "Karlitos Simmeon",
      telepon: "0852671876343",
      instansi: "Polines",
      alamat: "Jalan Kenangan Mantan",
    },
  ]);
  const [data, setData] = useState([...initialData]);
  const { sortBy, sortOrder } = useSortCustomer();
  const compareValues = useCompareValues;
  useEffect(() => {
    const sorted = [...initialData].sort(compareValues(sortBy, sortOrder));
    setData(sorted);
  }, [sortBy, sortOrder, compareValues, initialData]);

  return (
    <Box
      borderRadius={8}
      border={"1px solid var(--divider3)"}
      overflow={"auto"}
      className="scrollX"
    >
      <Table
        variant={"striped"}
        colorScheme="ad"
      >
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th whiteSpace={"nowrap"}>Nama Lengkap</Th>
            <Th>Nomor Ponsel</Th>
            <Th>Instansi/Perusahaan</Th>
            <Th>Alamat</Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((d, i) => (
            <Tr key={i}>
              <Td>{d.id}</Td>
              <Td>{d.username}</Td>
              <Td>{d.email}</Td>
              <Td whiteSpace={"nowrap"}>{d.namaLengkap}</Td>
              <Td>{d.telepon}</Td>
              <Td>{d.instansi}</Td>
              <Td minW={"300px"}>{d.alamat}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
