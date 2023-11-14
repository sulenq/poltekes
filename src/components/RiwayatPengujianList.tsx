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
import CustomerAksiPengujian from "./CustomerAksiPengujian";

export default function RiwayatPengujianList() {
  // TODO show riwayat pengujian table data

  const data = [
    {
      id: 1,
      tanggalOrder: "12-11-2023",
      nama: "Jolitos Kurniawan",
      tagihan: 2000000,
      status: "Tagihan Belum Dibayar",
    },
    {
      id: 2,
      tanggalOrder: "10-12-2023",
      nama: "Karlitos Bechkam",
      tagihan: 2400000,
      status: "Tanggal Pengujian - 12/12/2023",
    },
    {
      id: 3,
      tanggalOrder: "12-12-2023",
      nama: "Naomi Sinaga",
      tagihan: null,
      status: "Berkas Belum Lengkap",
    },
  ];

  const badgeColor = (status: string) => {
    switch (status) {
      default:
        return "blue";
      case "Tagihan Belum Dibayar":
      case "Berkas Belum Lengkap":
        return "red";
    }
  };

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
                <Badge className="badge" colorScheme={badgeColor(d.status)}>
                  {d.status}
                </Badge>
              </Td>
              <Td textAlign={"center"}>
                <CustomerAksiPengujian status={d.status} noreg={d.id} />
              </Td>
              <Td isNumeric>
                <Button variant={"outline"} colorScheme="ap">
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
