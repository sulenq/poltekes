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
      <HStack>
        <Text w={"130px"} mb={2}>
          Nama
        </Text>

        <Text mb={2}>: {data.nama}</Text>
      </HStack>

      <HStack>
        <Text w={"130px"} mb={2}>
          Kategori
        </Text>

        <Text mb={2}>: {data.kategori}</Text>
      </HStack>

      <HStack>
        <Text w={"130px"} mb={2}>
          Telepon
        </Text>

        <Text mb={2}>: {data.telepon}</Text>
      </HStack>

      <HStack>
        <Text w={"130px"} mb={2}>
          Email
        </Text>

        <Text mb={2}>: {data.email}</Text>
      </HStack>

      <HStack>
        <Text w={"130px"} mb={2}>
          Instansi
        </Text>

        <Text mb={2}>: {data.instansi}</Text>
      </HStack>

      <HStack>
        <Text w={"130px"} mb={2}>
          Alamat Instansi
        </Text>

        <Text mb={2}>: {data.alamatInstansi}</Text>
      </HStack>
    </Box>
  );
}
