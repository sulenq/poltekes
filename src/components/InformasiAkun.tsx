import { Box, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function InformasiAkun() {
  const dummy = {
    id: 6,
    name: "Reza Hashfi Hawari",
    username: "rezahawari123",
    email: "rezahawari19@gmail.com",
    role: "2",
    jenis: "Umum",
    institusi: "Poltekes",
    alamat_institusi: "Semarang",
    hp: "082352222001",
    created_at: "2023-11-07T14:44:32.000000Z",
    updated_at: "2023-11-07T14:44:32.000000Z",
  };
  const [data] = useState(dummy);

  return (
    <Box>
      <HStack mb={2} align={"flex-start"}>
        <Text w={"130px"} flexShrink={0}>
          Nama
        </Text>

        <Text mx={1}>:</Text>

        <Text>{data?.name}</Text>
      </HStack>

      <HStack mb={2} align={"flex-start"}>
        <Text w={"130px"} flexShrink={0}>
          Kategori
        </Text>

        <Text mx={1}>:</Text>

        <Text>{data?.jenis}</Text>
      </HStack>

      <HStack mb={2} align={"flex-start"}>
        <Text w={"130px"} flexShrink={0}>
          Telepon
        </Text>

        <Text mx={1}>:</Text>

        <Text>{data?.hp}</Text>
      </HStack>

      <HStack mb={2} align={"flex-start"}>
        <Text w={"130px"} flexShrink={0}>
          Email
        </Text>

        <Text mx={1}>:</Text>

        <Text>{data?.email}</Text>
      </HStack>

      <HStack mb={2} align={"flex-start"}>
        <Text w={"130px"} flexShrink={0}>
          Instansi
        </Text>

        <Text mx={1}>:</Text>

        <Text>{data?.institusi}</Text>
      </HStack>

      <HStack>
        <Text w={"130px"} flexShrink={0}>
          Alamat Instansi
        </Text>

        <Text mx={1}>:</Text>

        <Text>{data?.alamat_institusi}</Text>
      </HStack>
    </Box>
  );
}
