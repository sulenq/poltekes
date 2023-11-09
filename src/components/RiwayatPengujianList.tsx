import React from "react";
import TableContainer from "./TableContainer";
import {
  Badge,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import useFormatNumber from "../utils/useFormatNumber";
import StatusOrAksi from "./StatusOrAksi";

export default function RiwayatPengujianList() {
  // TODO show riwayat pengujian table data

  const data = [
    {
      id: 1,
      tanggalOrder: "12-11-2023",
      nama: "Jolitos Kurniawan",
      tagihan: 2000000,
      statusPembayaran: {
        name: "Belum Dibayar",
        color: "red",
      },
      statusOrAksi: {
        name: "Sedang Diverifikasi",
        type: "status",
        color: "blue",
      },
    },
    {
      id: 2,
      tanggalOrder: "10-12-2023",
      nama: "Karlitos Bechkam",
      tagihan: 2400000,
      statusPembayaran: {
        name: "Sudah Dibayar",
        color: "green",
      },
      statusOrAksi: {
        name: "Tanggal Pengujian - 12/12/2023",
        type: "status",
        color: "blue",
      },
    },
    {
      id: 3,
      tanggalOrder: "12-12-2023",
      nama: "Naomi Sinaga",
      tagihan: null,
      statusPembayaran: {
        name: "-",
        color: "-",
      },
      statusOrAksi: {
        name: "Unggah Berkas",
        type: "action",
        color: "ap",
      },
    },
  ];

  const fn = useFormatNumber;

  return (
    <TableContainer>
      <Table size={"sm"} variant={"striped"} colorScheme="ad">
        <Thead>
          <Tr>
            <Th isNumeric>No</Th>
            <Th>No.Registrasi</Th>
            <Th whiteSpace={"nowrap"}>Tanggal Order</Th>
            <Th>Nama</Th>
            <Th whiteSpace={"nowrap"} isNumeric>
              Tagihan
            </Th>
            <Th whiteSpace={"nowrap"}>Status Pembayaran</Th>
            <Th whiteSpace={"nowrap"} textAlign={"center"}>
              Status/Aksi
            </Th>
            <Th isNumeric></Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((d, i) => (
            <Tr key={i}>
              <Td isNumeric>1</Td>
              <Td>{d.id.toString().padStart(3, "0")}</Td>
              <Td>{d.tanggalOrder}</Td>
              <Td whiteSpace={"nowrap"}>{d.nama}</Td>
              <Td isNumeric whiteSpace={"nowrap"}>
                {d.tagihan !== null ? `Rp ${fn(d.tagihan)}` : "-"}
              </Td>
              <Td textAlign={"center"}>
                {d.statusPembayaran.name === "-" ? (
                  "-"
                ) : (
                  <Badge
                    colorScheme={d.statusPembayaran.color}
                    className="badge"
                  >
                    {d.statusPembayaran.name}
                  </Badge>
                )}
              </Td>
              <Td textAlign={"center"}>
                <StatusOrAksi data={d.statusOrAksi} />
              </Td>
              <Td isNumeric>
                <Button variant={"outline"} colorScheme="ap" size={"sm"}>
                  Detail
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
