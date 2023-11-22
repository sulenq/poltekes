import React from "react";
import AdminContainer from "../../components/AdminContainer";
import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import useScrollToTop from "../../utils/useScrollToTop";
import { CaretLeft, CaretRight, MagnifyingGlass } from "@phosphor-icons/react";
import { iconSize } from "../../const/sizes";
import TambahKategoriModal from "../../components/TambahKategoriModal";
import TabelKategoriProduk from "../../components/TabelKategoriProduk";
import SortKategoriProduk from "../../components/SortKategoriProduk";

export default function AdminKategoriProduk() {
  useScrollToTop();
  const bg = useColorModeValue("white", "dark");

  return (
    <AdminContainer active={["Produk", "Kategori Produk"]}>
      <Box p={[4, 5, 6]} bg={bg} borderRadius={16}>
        <HStack mb={4}>
          <InputGroup>
            <InputLeftElement>
              <Icon as={MagnifyingGlass} fontSize={iconSize} />
            </InputLeftElement>

            <Input placeholder={"Search"} maxW={"300px"} />
          </InputGroup>

          <SortKategoriProduk />

          <TambahKategoriModal />
        </HStack>

        <TabelKategoriProduk />

        <HStack justify={"center"} mt={4}>
          <IconButton
            aria-label="prev"
            icon={<Icon as={CaretLeft} fontSize={iconSize} />}
            variant={"ghost"}
            className="btn"
            size={"sm"}
          />

          <HStack mx={2}>
            <Center bg={"p.500"} w={"32px"} h={"32px"} borderRadius={8}>
              <Text color={"white"}>1</Text>
            </Center>
          </HStack>

          <IconButton
            aria-label="prev"
            icon={<Icon as={CaretRight} fontSize={iconSize} />}
            variant={"ghost"}
            className="btn"
            size={"sm"}
          />
        </HStack>
      </Box>
    </AdminContainer>
  );
}
