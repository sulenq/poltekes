import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

export default function InformasiAkun() {
  const data = {
    nama: "Jolitos Kurniawan",
    kategori: "Umum",
    telepon: "08586182762",
    email: "jolitos@gmail.com",
    instansi: "Poltekkes Kemenkes Semarang",
    alamatInstansi: "Jalan Banjarsari 12",
  };

  return (
    <Box>
      <HStack mb={2}>
        <Text w={"130px"}>Nama</Text>

        <Text mx={1}>:</Text>

        <Text>{data.nama}</Text>
      </HStack>

      <HStack mb={2}>
        <Text w={"130px"}>Kategori</Text>

        <Text mx={1}>:</Text>

        <Text>{data.kategori}</Text>
      </HStack>

      <HStack mb={2}>
        <Text w={"130px"}>Telepon</Text>

        <Text mx={1}>:</Text>

        <Text>{data.telepon}</Text>
      </HStack>

      <HStack mb={2}>
        <Text w={"130px"}>Email</Text>

        <Text mx={1}>:</Text>

        <Text>{data.email}</Text>
      </HStack>

      <HStack mb={2}>
        <Text w={"130px"}>Instansi</Text>

        <Text mx={1}>:</Text>

        <Text>{data.instansi}</Text>
      </HStack>

      <HStack>
        <Text w={"130px"}>Alamat Instansi</Text>

        <Text mx={1}>:</Text>

        <Text>{data.alamatInstansi}</Text>
      </HStack>
    </Box>
  );
}
