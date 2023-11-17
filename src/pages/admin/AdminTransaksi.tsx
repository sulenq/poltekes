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
import { CaretLeft, CaretRight, MagnifyingGlass } from "@phosphor-icons/react";
import { iconSize } from "../../const/sizes";
import useScrollToTop from "../../utils/useScrollToTop";
import SortTransaksi from "../../components/SortTransaksi";
import TabelTransaksi from "../../components/TabelTransaksi";

export default function AdminTransaksi() {
  useScrollToTop();
  const bg = useColorModeValue("white", "dark");

  return (
    <AdminContainer active={["Transaksi"]}>
      <Box
        p={[4, 5, 6]}
        bg={bg}
        borderRadius={16}
        // mb={6}
      >
        <HStack mb={4}>
          <InputGroup>
            <InputLeftElement>
              <Icon
                as={MagnifyingGlass}
                fontSize={iconSize}
              />
            </InputLeftElement>

            <Input
              placeholder={"Search"}
              maxW={"300px"}
            />
          </InputGroup>

          <SortTransaksi />
        </HStack>

        <TabelTransaksi />

        <HStack
          justify={"center"}
          mt={4}
        >
          <IconButton
            aria-label="prev"
            icon={
              <Icon
                as={CaretLeft}
                fontSize={iconSize}
              />
            }
            variant={"ghost"}
            className="btn"
            size={"sm"}
          />

          <HStack mx={2}>
            <Center
              bg={"p.500"}
              w={"32px"}
              h={"32px"}
              borderRadius={8}
            >
              <Text color={"white"}>1</Text>
            </Center>
          </HStack>

          <IconButton
            aria-label="prev"
            icon={
              <Icon
                as={CaretRight}
                fontSize={iconSize}
              />
            }
            variant={"ghost"}
            className="btn"
            size={"sm"}
          />
        </HStack>
      </Box>
    </AdminContainer>
  );
}
