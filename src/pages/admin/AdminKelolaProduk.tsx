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
  MenuDivider,
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
import {
  CaretDown,
  CaretLeft,
  CaretRight,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { iconSize } from "../../const/sizes";
import useFormatNumber from "../../utils/useFormatNumber";
import AdminKelolaProdukAksiModal from "../../components/AdminKelolaProdukAksiModal";

export default function AdminProduk() {
  const bg = useColorModeValue("white", "dark");

  // TODO get data
  const data = [
    {
      id: "1",
      kode: "9094012863",
      namaProduk: "Pengujian X",
      kategori: "Radiologi",
      harga: 1800000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa di tubuh anda ada khodamnya atau tidak",
    },
    {
      id: "2",
      kode: "3987687623",
      namaProduk: "Pengujian Y",
      kategori: "Radiologi",
      harga: 2800000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa di tubuh anda ada khodamnya atau tidak",
    },
    {
      id: "3",
      kode: "12309172837",
      namaProduk: "Pengujian A",
      kategori: "Radiologi",
      harga: 1800000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa di tubuh anda ada khodamnya atau tidak",
    },
    {
      id: "4",
      kode: "3986182653",
      namaProduk: "Pengujian B",
      kategori: "Radiologi",
      harga: 800000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa di tubuh anda ada khodamnya atau tidak",
    },
  ];

  const fn = useFormatNumber;

  return (
    <AdminContainer active={["Produk", "Kelola Produk"]}>
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
              minW={"140px"}
              // border={"1px solid var(--p500)"}
            >
              <MenuGroup title="Nama Produk">
                <MenuItem>A-Z</MenuItem>
                <MenuItem>Z-A</MenuItem>
              </MenuGroup>

              <MenuDivider />

              <MenuGroup title="Kategori">
                <MenuItem>A-Z</MenuItem>
                <MenuItem>Z-A</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
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
                <Th>Kode</Th>
                <Th whiteSpace={"nowrap"}>Nama Produk</Th>
                <Th>Kategori</Th>
                <Th isNumeric>Harga</Th>
                <Th>Deskripsi</Th>
                <Th
                  w={"20px"}
                  textAlign={"center"}
                >
                  Aksi
                </Th>
              </Tr>
            </Thead>

            <Tbody>
              {data.map((d, i) => (
                <Tr key={i}>
                  <Td>{d.kode}</Td>
                  <Td>{d.namaProduk}</Td>
                  <Td>{d.kategori}</Td>
                  <Td
                    whiteSpace={"nowrap"}
                    isNumeric
                  >
                    Rp {fn(d.harga)}
                  </Td>
                  <Td>
                    <Text
                      w={"400px"}
                      noOfLines={2}
                      fontSize={[12, null, 14]}
                    >
                      {d.deskripsi}
                    </Text>
                  </Td>
                  <Td>
                    <AdminKelolaProdukAksiModal id={d.id} />
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
