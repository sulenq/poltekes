import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

export default function InformasiAkun() {
  // TODO get user data
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
      <HStack mb={2} align={"flex-start"}>
        <Text w={"130px"} flexShrink={0}>
          Nama
        </Text>

        <Text mx={1}>:</Text>

        <Text>{data.nama}</Text>
      </HStack>

      <HStack mb={2} align={"flex-start"}>
        <Text w={"130px"} flexShrink={0}>
          Kategori
        </Text>

        <Text mx={1}>:</Text>

        <Text>{data.kategori}</Text>
      </HStack>

      <HStack mb={2} align={"flex-start"}>
        <Text w={"130px"} flexShrink={0}>
          Telepon
        </Text>

        <Text mx={1}>:</Text>

        <Text>{data.telepon}</Text>
      </HStack>

      <HStack mb={2} align={"flex-start"}>
        <Text w={"130px"} flexShrink={0}>
          Email
        </Text>

        <Text mx={1}>:</Text>

        <Text>{data.email}</Text>
      </HStack>

      <HStack mb={2} align={"flex-start"}>
        <Text w={"130px"} flexShrink={0}>
          Instansi
        </Text>

        <Text mx={1}>:</Text>

        <Text>{data.instansi}</Text>
      </HStack>

      <HStack>
        <Text w={"130px"} flexShrink={0}>
          Alamat Instansi
        </Text>

        <Text mx={1}>:</Text>

        <Text>{data.alamatInstansi}</Text>
      </HStack>
    </Box>
  );
}
