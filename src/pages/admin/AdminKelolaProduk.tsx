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
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { CaretLeft, CaretRight, MagnifyingGlass } from "@phosphor-icons/react";
import { iconSize } from "../../const/sizes";
import SortKelolaProduk from "../../components/SortKelolaProduk";
import KelolaProdukTable from "../../components/TabelKelolaProduk";

export default function AdminProduk() {
  const bg = useColorModeValue("white", "dark");

  return (
    <AdminContainer active={["Produk", "Kelola Produk"]}>
      <Box p={[4, 5, 6]} bg={bg} borderRadius={16}>
        <HStack mb={4}>
          <InputGroup>
            <InputLeftElement>
              <Icon as={MagnifyingGlass} fontSize={iconSize} />
            </InputLeftElement>

            <Input placeholder={"Search"} maxW={"300px"} />
          </InputGroup>

          <SortKelolaProduk />
        </HStack>

        <KelolaProdukTable />

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
