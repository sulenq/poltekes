import { Box, Text } from "@chakra-ui/react";
import React from "react";
import DividerFullHorizontal from "./DividerFullHorizontal";
import useFormatNumber from "../utils/useFormatNumber";

export default function DetailMetodeUji() {
  // TODO get detail metode uji by no reg

  const metode = {
    nama: "Pengujian A - anjay mabar",
    kategori: " X-ray aselole",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Commodo habitasse magna a id justo enim. Magna augue mattis vestibulum faucibus nibh. At in ac mauris id. Eget semper nisi.",
    harga: 1800000,
  };

  const fn = useFormatNumber;

  return (
    <Box
      p={4}
      borderRadius={8}
      border={"1px solid var(--divider3)"}
      bg={"var(--divider)"}
    >
      <Text fontWeight={600}>{metode.nama}</Text>
      <Text opacity={0.5} fontSize={[12, null, 14]} mb={4}>
        {metode.kategori}
      </Text>

      <Text fontSize={[12, null, 14]}>{metode.deskripsi}</Text>

      <DividerFullHorizontal my={4} />

      <Text fontWeight={600} alignSelf={"center"} whiteSpace={"nowrap"}>
        {`Rp ${fn(metode.harga)}`}
      </Text>
    </Box>
  );
}
