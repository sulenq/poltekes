import { Box, Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import DividerFullHorizontal from "./DividerFullHorizontal";
import useFormatNumber from "../utils/useFormatNumber";
import { Link } from "react-router-dom";

export default function MetodeUjiList() {
  const data = [
    {
      nama: "Pengujian A - X-ray aselole",
      kategori: "X-ray",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur. Commodo habitasse magna a id justo enim. Magna augue mattis vestibulum faucibus nibh. At in ac mauris id. Eget semper nisi",
      harga: 1800000,
    },
    {
      nama: "Pengujian B - Anjay Method",
      kategori: "Anjay Method",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur. Commodo habitasse magna a id justo enim. Magna augue mattis vestibulum faucibus nibh. At in ac mauris id. Eget semper nisi",
      harga: 1800000,
    },
    {
      nama: "Pengujian C - Anjay Method",
      kategori: "X-ray",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur. Commodo habitasse magna a id justo enim. Magna augue mattis vestibulum faucibus nibh. At in ac mauris id. Eget semper nisi",
      harga: 1800000,
    },
    {
      nama: "Pengujian D - X-ray aselole",
      kategori: "Anjay Method",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur. Commodo habitasse magna a id justo enim. Magna augue mattis vestibulum faucibus nibh. At in ac mauris id. Eget semper nisi",
      harga: 1800000,
    },
    {
      nama: "Pengujian E - X-ray aselole",
      kategori: "Anjay Method",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur. Commodo habitasse magna a id justo enim. Magna augue mattis vestibulum faucibus nibh. At in ac mauris id. Eget semper nisi",
      harga: 1800000,
    },
  ];

  const fn = useFormatNumber;

  return (
    <SimpleGrid columns={[2, null, 3]} gap={4}>
      {data.map((metode, i) => (
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

          <SimpleGrid columns={[1, 2, 2]} gap={4}>
            <Text fontWeight={600} alignSelf={"center"} whiteSpace={"nowrap"}>
              {`Rp ${fn(metode.harga)}`}
            </Text>

            {/* TODO setelah pilih, navigate to unggah berkas */}

            <Button
              colorScheme={"ap"}
              className="lg-clicky"
              as={Link}
              to={"/customer/pengujian/pendaftaran-pengujian/1/unggah-berkas"}
              w={["100%", "fit-content", null]}
              justifySelf={"flex-end"}
            >
              Pilih
            </Button>
          </SimpleGrid>
        </Box>
      ))}
    </SimpleGrid>
  );
}
