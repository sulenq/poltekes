import { Badge, Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import useScreenWidth from "../utils/useGetScreenWidth";
import AdminAksiPengujian from "./AdminAksiPengujian";
import DetailTransaksi from "./DetailTransaksi";
import useStatusBadgeColor from "../utils/useStatusBadgeColor";

export default function TabelTransaksi() {
  //   TODO get data
  const data = [
    {
      id: 1,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Berkas Belum Lengkap",
    },
    {
      id: 2,
      tanggalOrder: "12-12-2023",
      nama: "Jolitos Kurniawan",
      produk: "Pengujian A",
      status: "Verifikasi Berkas",
    },
    {
      id: 3,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Tagihan Belum Dibayar",
    },
    {
      id: 4,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Verifikasi Pembayaran",
    },

    {
      id: 5,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Pembayaran Diverifikasi",
    },
    {
      id: 6,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Tanggal Pengujian - 12/12/2023",
    },
    {
      id: 7,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Dalam Pengujian",
    },
    {
      id: 8,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Pengujian Selesai",
    },
  ];

  const sw = useScreenWidth();
  const statusBadgeColor = useStatusBadgeColor;

  return (
    <Box
      borderRadius={8}
      border={"1px solid var(--divider3)"}
      overflow={"auto"}
      maxH={sw < 770 ? "calc(100vh - 300px)" : "calc(100vh - 252px)"}
      className="scrollX scrollY"
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
            <Th>No. Registrasi</Th>
            <Th whiteSpace={"nowrap"}>Tanggal Order</Th>
            <Th>Nama</Th>
            <Th>Produk</Th>
            <Th textAlign={"center"}>Status</Th>
            <Th textAlign={"center"}>Aksi</Th>
            <Th></Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((d, i) => (
            <Tr key={i}>
              <Td isNumeric>{i + 1}</Td>
              <Td>{d.id.toString().padStart(3, "0")}</Td>
              <Td>{d.tanggalOrder}</Td>
              <Td>{d.nama}</Td>
              <Td>{d.produk}</Td>
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
                <AdminAksiPengujian status={d.status} />
              </Td>
              <Td
                isNumeric
                w={"40px"}
              >
                <DetailTransaksi id={d.id} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
