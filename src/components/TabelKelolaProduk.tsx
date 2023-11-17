import {
  Box,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useSortKelolaProduk from "../globalState/useSortKelolaProduk";
import useCompareValues from "../utils/useCompareValues";
import useFormatNumber from "../utils/useFormatNumber";
import AdminKelolaProdukAksiMenu from "./AdminKelolaProdukAksiMenu";

export default function KelolaProdukTable() {
  // TODO get data
  const [initialData] = useState([
    {
      id: "1",
      kode: "9094012863",
      namaProduk: "Pengujian X",
      kategori: "Radiologi",
      harga: 1800000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa di tubuh anda ada khodamnya atau tidak",
    },
    {
      id: "2",
      kode: "3987687623",
      namaProduk: "Pengujian Y",
      kategori: "Biologi",
      harga: 2800000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa jika sabun jatuh ke lantai, lantainya jadi bersih atau sabunnya yang kotor",
    },
    {
      id: "3",
      kode: "12309172837",
      namaProduk: "Pengujian A",
      kategori: "Sosiologi",
      harga: 1800000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa di tubuh anda ada khodamnya atau tidak",
    },
    {
      id: "4",
      kode: "3986182653",
      namaProduk: "Pengujian B",
      kategori: "Geologi",
      harga: 800000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa di tubuh anda ada khodamnya atau tidak",
    },
  ]);
  const [data, setData] = useState([...initialData]);
  const { sortBy, sortOrder } = useSortKelolaProduk();
  const compareValues = useCompareValues;

  useEffect(() => {
    const sorted = [...initialData].sort(compareValues(sortBy, sortOrder));
    setData(sorted);
  }, [sortBy, sortOrder, compareValues, initialData]);

  const fn = useFormatNumber;

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
            <Th whiteSpace={"nowrap"}>Nama Produk</Th>
            <Th>Kategori</Th>
            <Th isNumeric>Harga</Th>
            <Th>Deskripsi</Th>
            <Th
              w={"20px"}
              textAlign={"center"}
            >
              Aksi
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((d, i) => (
            <Tr key={i}>
              <Td>{d.kode}</Td>
              <Td>{d.namaProduk}</Td>
              <Td>{d.kategori}</Td>
              <Td
                whiteSpace={"nowrap"}
                isNumeric
              >
                Rp {fn(d.harga)}
              </Td>
              <Td>
                <Tooltip
                  label={d.deskripsi}
                  placement="bottom-start"
                >
                  <Text
                    w={"300px"}
                    noOfLines={2}
                    fontSize={[12, null, 14]}
                  >
                    {d.deskripsi}
                  </Text>
                </Tooltip>
              </Td>
              <Td>
                <AdminKelolaProdukAksiMenu id={d.id} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
