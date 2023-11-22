import { Box, HStack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { getCookie } from "typescript-cookie";
import { userData } from "../const/types";

export default function InformasiAkun() {
  const [data, setData] = useState<userData | null>(null);

  useEffect(() => {
    const userDataCookie = getCookie("userData");
    if (userDataCookie) {
      setData(JSON.parse(userDataCookie));
    }
  }, []);

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
