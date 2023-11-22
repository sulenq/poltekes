import {
  Badge,
  Box,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useScreenWidth from "../utils/useGetScreenWidth";
import AdminAksiPengujian from "./AdminAksiPengujian";
import DetailTransaksiAdminModal from "./DetailTransaksiModal";
import useStatusBadgeColor from "../utils/useStatusBadgeColor";
import useSortTransaksi from "../globalState/useSortTransaksi";
import useCompareValues from "../utils/useCompareValues";

export default function TabelTransaksi() {
  //   TODO get data
  const [initialData] = useState([
    {
      id: 1,
      tanggalOrder:
        "Fri Nov 10 2023 16:52:28 GMT+0700 (Western Indonesia Time)",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Berkas Belum Lengkap",
    },
    {
      id: 2,
      tanggalOrder:
        "Fri Nov 11 2023 16:52:28 GMT+0700 (Western Indonesia Time)",
      nama: "Jolitos Kurniawan",
      produk: "Pengujian A",
      status: "Verifikasi Berkas",
    },
    {
      id: 3,
      tanggalOrder:
        "Fri Nov 12 2023 16:52:28 GMT+0700 (Western Indonesia Time)",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Tagihan Belum Dibayar",
    },
    {
      id: 4,
      tanggalOrder:
        "Fri Nov 13 2023 16:52:28 GMT+0700 (Western Indonesia Time)",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Verifikasi Pembayaran",
    },

    {
      id: 5,
      tanggalOrder:
        "Fri Nov 14 2023 16:52:28 GMT+0700 (Western Indonesia Time)",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Pembayaran Diverifikasi",
    },
    {
      id: 6,
      tanggalOrder:
        "Fri Nov 15 2023 16:52:28 GMT+0700 (Western Indonesia Time)",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Tanggal Pengujian - 12/12/2023",
    },
    {
      id: 7,
      tanggalOrder:
        "Fri Nov 16 2023 16:52:28 GMT+0700 (Western Indonesia Time)",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Dalam Pengujian",
    },
    {
      id: 8,
      tanggalOrder:
        "Fri Nov 18 2023 16:52:28 GMT+0700 (Western Indonesia Time)",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Pengujian Selesai",
    },
  ]);
  const [data, setData] = useState([...initialData]);
  const { sortBy, sortOrder } = useSortTransaksi();
  const compareValues = useCompareValues;
  useEffect(() => {
    const sorted = [...initialData].sort(compareValues(sortBy, sortOrder));
    setData(sorted);
  }, [sortBy, sortOrder, compareValues, initialData]);

  const sw = useScreenWidth();
  const statusBadgeColor = useStatusBadgeColor;

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
            <Th w={"20px"} isNumeric>
              No
            </Th>
            <Th>No.Registrasi</Th>
            <Th whiteSpace={"nowrap"}>Tanggal Order</Th>
            <Th>Nama</Th>
            <Th>Produk</Th>
            <Th textAlign={"center"}>Status</Th>
            <Th textAlign={"center"}>Aksi</Th>
            <Th></Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((d, i) => {
            const tanggalOrder = new Date(d.tanggalOrder);
            return (
              <Tr key={i}>
                <Td isNumeric>{i + 1}</Td>
                <Td>{d.id.toString().padStart(3, "0")}</Td>
                <Td whiteSpace={"nowrap"}>
                  {tanggalOrder.toLocaleDateString("id-ID", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    // hour: "2-digit",
                    // minute: "2-digit",
                  })}
                </Td>
                <Td>
                  <Text w={"160px"}>{d.nama}</Text>
                </Td>
                <Td>
                  <Text w={"200px"}>{d.produk}</Text>
                </Td>
                <Td textAlign={"center"}>
                  <Badge
                    w={"100%"}
                    className="badge"
                    colorScheme={statusBadgeColor(d.status)}
                  >
                    {d.status}
                  </Badge>
                </Td>
                <Td textAlign={"center"}>
                  <AdminAksiPengujian status={d.status} noreg={d.id} />
                </Td>
                <Td isNumeric w={"40px"}>
                  <DetailTransaksiAdminModal id={d.id} />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
