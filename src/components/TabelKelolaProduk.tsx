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
import useScreenWidth from "../utils/useGetScreenWidth";

export default function KelolaProdukTable() {
  // TODO get data
  const [initialData] = useState([
    {
      id: "1",
      namaProduk: "Pengujian X",
      kategori: "Radiologi",
      harga: 2200000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa di tubuh anda ada khodamnya atau tidak",
    },
    {
      id: "2",
      namaProduk: "Pengujian Y",
      kategori: "Biologi",
      harga: 2800000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa jika sabun jatuh ke lantai, lantainya jadi bersih atau sabunnya yang kotor",
    },
    {
      id: "3",
      namaProduk: "Pengujian A",
      kategori: "Sosiologi",
      harga: 1000000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa di tubuh anda ada khodamnya atau tidak",
    },
    {
      id: "4",
      namaProduk: "Pengujian B",
      kategori: "Geologi",
      harga: 800000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa di tubuh anda ada khodamnya atau tidak",
    },
    {
      id: "5",
      namaProduk: "Pengujian C",
      kategori: "Geologi",
      harga: 800000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa di tubuh anda ada khodamnya atau tidak",
    },
    {
      id: "6",
      namaProduk: "Pengujian D",
      kategori: "Geologi",
      harga: 400000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa di tubuh anda ada khodamnya atau tidak",
    },
    {
      id: "7",
      namaProduk: "Pengujian F",
      kategori: "Geologi",
      harga: 800000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa di tubuh anda ada khodamnya atau tidak",
    },
    {
      id: "8",
      namaProduk: "Pengujian E",
      kategori: "Geologi",
      harga: 670000,
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
  const sw = useScreenWidth();

  return (
    <Box
      borderRadius={8}
      border={"1px solid var(--divider3)"}
      overflow={"auto"}
      className="scrollX scrollY"
      maxH={sw < 770 ? "calc(100vh - 290px)" : "calc(100vh - 245px)"}
    >
      <Table variant={"striped"} colorScheme="ad">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th whiteSpace={"nowrap"}>Nama Produk</Th>
            <Th>Kategori</Th>
            <Th isNumeric>Harga</Th>
            <Th>Deskripsi</Th>
            <Th w={"20px"} textAlign={"center"}>
              Aksi
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((d, i) => (
            <Tr key={i}>
              <Td>{d.id}</Td>
              <Td>{d.namaProduk}</Td>
              <Td>{d.kategori}</Td>
              <Td whiteSpace={"nowrap"} isNumeric>
                Rp {fn(d.harga)}
              </Td>
              <Td>
                <Tooltip label={d.deskripsi} placement="bottom-start">
                  <Text w={"300px"} noOfLines={2} fontSize={[12, null, 14]}>
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
