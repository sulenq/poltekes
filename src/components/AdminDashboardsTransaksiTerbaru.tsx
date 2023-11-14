import {
  Badge,
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function AdminDashboardsTransaksiTerbaru() {
  const bg = useColorModeValue("white", "dark");
  //   TODO get data
  const data = [
    {
      id: 1,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Verifikasi Berkas",
    },
    {
      id: 2,
      tanggalOrder: "12-12-2023",
      nama: "Jolitos Kurniawan",
      produk: "Pengujian A",
      status: "Verifikasi Pembayaran",
    },
    {
      id: 3,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Verifikasi Berkas",
    },
  ];

  return (
    <Box
      p={[4, 6, 6]}
      borderRadius={16}
      bg={bg}
      overflow={"auto"}
    >
      <Text
        fontSize={[18, null, 20]}
        fontWeight={600}
        mb={4}
      >
        Transaksi Terbaru
      </Text>

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
              <Th>No. Registrasi</Th>
              <Th whiteSpace={"nowrap"}>Tanggal Order</Th>
              <Th>Nama</Th>
              <Th>Produk</Th>
              <Th textAlign={"center"}>Status</Th>
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
                    colorScheme="orange"
                  >
                    {d.status}
                  </Badge>
                </Td>
                <Td
                  isNumeric
                  w={"40px"}
                >
                  <Button
                    colorScheme="ap"
                    variant={"outline"}
                    className="lg-clicky"
                  >
                    Detail
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
