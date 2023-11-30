import React from "react";
import TableContainer from "./TableContainer";
import { Badge, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import useFormatNumber from "../utils/useFormatNumber";
import CustomerAksiPengujian from "./CustomerAksiPengujian";
import useStatusBadgeColor from "../utils/useStatusBadgeColor";
import DetailTransaksiModal from "./DetailTransaksiModal";

export default function TabelRiwayatPengujian() {
  // TODO show riwayat pengujian table data

  const data = [
    {
      id: 11,
      tanggalOrder: "12-11-2023",
      nama: "Jolitos Kurniawan",
      tagihan: null,
      status: "Belum Memilih Metode Uji",
    },
    {
      id: 1,
      tanggalOrder: "12-11-2023",
      nama: "Jolitos Kurniawan",
      tagihan: null,
      status: "Berkas Belum Lengkap",
    },
    {
      id: 4,
      tanggalOrder: "12-11-2023",
      nama: "Jolitos Kurniawan",
      tagihan: null,
      status: "Verifikasi Berkas",
    },
    {
      id: 9,
      tanggalOrder: "12-11-2023",
      nama: "Nanditos Maryadi",
      tagihan: null,
      status: "Verifikasi Berkas Ditolak",
    },
    {
      id: 3,
      tanggalOrder: "10-12-2023",
      nama: "Karlitos Bechkam",
      tagihan: 2400000,
      status: "Unggah Berkas Lanjutan",
    },
    {
      id: 2,
      tanggalOrder: "12-12-2023",
      nama: "Naomi Sinaga",
      tagihan: 2000000,
      status: "Verifikasi Berkas Lanjutan",
    },
    {
      id: 10,
      tanggalOrder: "12-12-2023",
      nama: "Naomi Sinaga",
      tagihan: 2000000,
      status: "Verifikasi Berkas Lanjutan Ditolak",
    },
    {
      id: 5,
      tanggalOrder: "12-12-2023",
      nama: "Naomi Sinaga",
      tagihan: 2000000,
      status: "Berkas Lanjutan Diverifikasi",
    },
    {
      id: 8,
      tanggalOrder: "12-12-2023",
      nama: "Naomi Sinaga",
      tagihan: 2000000,
      status: "Tanggal Pengujian - 12/12/2023",
    },
    {
      id: 7,
      tanggalOrder: "12-12-2023",
      nama: "Naomi Sinaga",
      tagihan: 2000000,
      status: "Dalam Pengujian",
    },
    {
      id: 6,
      tanggalOrder: "12-12-2023",
      nama: "Naomi Sinaga",
      tagihan: 2000000,
      status: "Pengujian Selesai",
    },
  ];

  const statusBadgeColor = useStatusBadgeColor;

  const fn = useFormatNumber;

  return (
    <TableContainer>
      <Table variant={"striped"} colorScheme="ad">
        <Thead>
          <Tr>
            <Th isNumeric>No</Th>
            <Th>No.Registrasi</Th>
            <Th whiteSpace={"nowrap"}>Tanggal Order</Th>
            <Th>Nama</Th>
            <Th whiteSpace={"nowrap"} isNumeric>
              Tagihan
            </Th>
            <Th whiteSpace={"nowrap"} textAlign={"center"}>
              Status
            </Th>
            <Th whiteSpace={"nowrap"} textAlign={"center"}>
              Aksi
            </Th>
            <Th isNumeric></Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((d, i) => (
            <Tr key={i}>
              <Td isNumeric>{i + 1}</Td>
              <Td>{d.id.toString().padStart(3, "0")}</Td>
              <Td>{d.tanggalOrder}</Td>
              <Td whiteSpace={"nowrap"}>{d.nama}</Td>
              <Td isNumeric whiteSpace={"nowrap"}>
                {d.tagihan !== null ? `Rp ${fn(d.tagihan)}` : "-"}
              </Td>
              <Td textAlign={"center"}>
                <Badge w={"100%"} colorScheme={statusBadgeColor(d.status)}>
                  {d.status}
                </Badge>
              </Td>
              <Td textAlign={"center"}>
                <CustomerAksiPengujian status={d.status} noreg={d.id} />
              </Td>
              <Td isNumeric>
                <DetailTransaksiModal id={d.id} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
