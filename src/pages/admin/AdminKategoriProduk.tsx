import React from "react";
import AdminContainer from "../../components/AdminContainer";
import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import useScrollToTop from "../../utils/useScrollToTop";
import {
  ArrowDown,
  ArrowUp,
  CaretDown,
  CaretLeft,
  CaretRight,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { iconSize } from "../../const/sizes";
import TambahKategoriModal from "../../components/TambahKategoriModal";
import DeleteKategoriModal from "../../components/DeleteKategoriModal";

export default function AdminKategoriProduk() {
  useScrollToTop();
  const bg = useColorModeValue("white", "dark");

  //   TODO get data
  const data = [
    {
      id: 1,
      namaKategori: "Radiologi",
    },
    {
      id: 2,
      namaKategori: "X-Ray",
    },
    {
      id: 3,
      namaKategori: "Pesawat",
    },
    {
      id: 4,
      namaKategori: "Tesla",
    },
    {
      id: 5,
      namaKategori: "Kucing",
    },
  ];

  return (
    <AdminContainer active={["Produk", "Kategori Produk"]}>
      <VStack
        w={"100%"}
        align={"stretch"}
        gap={0}
        p={[4, 5, 6]}
        bg={bg}
        borderRadius={16}
        mb={6}
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

          <Menu>
            <MenuButton
              as={Button}
              flexShrink={0}
              variant={"outline"}
              colorScheme="ap"
              pr={"12px"}
              rightIcon={
                <Icon
                  as={CaretDown}
                  fontSize={iconSize}
                />
              }
            >
              Urutkan
            </MenuButton>

            <MenuList
            // minW={"140px"}
            >
              <MenuGroup title="Nama Kategori">
                <MenuItem>
                  <HStack className="sortItem">
                    <Text>A-Z</Text>
                    <Icon
                      as={ArrowUp}
                      fontSize={iconSize}
                    />
                  </HStack>
                </MenuItem>
                <MenuItem>
                  <HStack className="sortItem">
                    <Text>Z-A</Text>
                    <Icon
                      as={ArrowDown}
                      fontSize={iconSize}
                    />
                  </HStack>
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>

          <TambahKategoriModal />
        </HStack>

        <Box
          borderRadius={8}
          border={"1px solid var(--divider3)"}
          overflow={"auto"}
          className="scrollX"
        >
          <Table
            variant={"striped"}
            colorScheme="ad"
          >
            <Thead>
              <Tr>
                <Th
                  w={"20px"}
                  isNumeric
                >
                  No
                </Th>
                <Th>Nama Kategori</Th>
                <Th textAlign={"center"}>Aksi</Th>
              </Tr>
            </Thead>

            <Tbody>
              {data.map((d, i) => (
                <Tr key={i}>
                  <Td isNumeric>{i + 1}</Td>
                  <Td>{d.namaKategori}</Td>
                  <Td
                    isNumeric
                    w={"40px"}
                  >
                    <DeleteKategoriModal id={d.id} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

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
      </VStack>
    </AdminContainer>
  );
}
