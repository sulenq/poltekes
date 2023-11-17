import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DeleteKategoriModal from "./DeleteKategoriModal";
import useCompareValues from "../utils/useCompareValues";
import useSortKategoriProduk from "../globalState/useSortKategoriProduk";

export default function TabelKategoriProduk() {
  //   TODO get data
  const [initialData] = useState([
    {
      id: 1,
      namaKategori: "Radiologi",
    },
    {
      id: 2,
      namaKategori: "X-Ray",
    },
    {
      id: 3,
      namaKategori: "Pesawat",
    },
    {
      id: 4,
      namaKategori: "Tesla",
    },
    {
      id: 5,
      namaKategori: "Kucing",
    },
  ]);
  const [data, setData] = useState([...initialData]);
  const { sortBy, sortOrder } = useSortKategoriProduk();
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
            <Th
              w={"20px"}
              isNumeric
            >
              No
            </Th>
            <Th>Nama Kategori</Th>
            <Th textAlign={"center"}>Aksi</Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((d, i) => (
            <Tr key={i}>
              <Td isNumeric>{i + 1}</Td>
              <Td>{d.namaKategori}</Td>
              <Td
                isNumeric
                w={"40px"}
              >
                <DeleteKategoriModal id={d.id} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
