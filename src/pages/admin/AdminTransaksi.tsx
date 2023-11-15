import React from "react";
import AdminContainer from "../../components/AdminContainer";
import {
  Badge,
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
  MenuItem,
  MenuList,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  CaretDown,
  CaretLeft,
  CaretRight,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { iconSize } from "../../const/sizes";
import AdminAksiPengujian from "../../components/AdminAksiPengujian";
import useStatusBadgeColor from "../../utils/useStatusBadgeColor";
import useScrollToTop from "../../utils/useScrollToTop";
import DetailTransaksi from "../../components/DetailTransaksi";
import useScreenWidth from "../../utils/useGetScreenWidth";

export default function AdminTransaksi() {
  useScrollToTop();
  const bg = useColorModeValue("white", "dark");
  //   TODO get data
  const data = [
    {
      id: 1,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Berkas Belum Lengkap",
    },
    {
      id: 2,
      tanggalOrder: "12-12-2023",
      nama: "Jolitos Kurniawan",
      produk: "Pengujian A",
      status: "Verifikasi Berkas",
    },
    {
      id: 3,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Tagihan Belum Dibayar",
    },
    {
      id: 4,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Verifikasi Pembayaran",
    },

    {
      id: 5,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Pembayaran Diverifikasi",
    },
    {
      id: 6,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Tanggal Pengujian - 12/12/2023",
    },
    {
      id: 7,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Dalam Pengujian",
    },
    {
      id: 8,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Pengujian Selesai",
    },
    {
      id: 9,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Pengujian Selesai",
    },
    {
      id: 10,
      tanggalOrder: "12-12-2023",
      nama: "Panjul Simonsely",
      produk: "Pengujian X",
      status: "Pengujian Selesai",
    },
  ];

  const statusBadgeColor = useStatusBadgeColor;
  const sw = useScreenWidth();

  return (
    <AdminContainer active={["Transaksi"]}>
      <Box
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
              border={"1px solid var(--p500)"}
            >
              <MenuItem>Apa Hayo</MenuItem>
              <MenuItem>La Apa</MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        <Box
          borderRadius={8}
          border={"1px solid var(--divider3)"}
          overflow={"auto"}
          maxH={sw < 770 ? "calc(100vh - 300px)" : "calc(100vh - 252px)"}
          className="scrollX scrollY"
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
                <Th>No. Registrasi</Th>
                <Th whiteSpace={"nowrap"}>Tanggal Order</Th>
                <Th>Nama</Th>
                <Th>Produk</Th>
                <Th textAlign={"center"}>Status</Th>
                <Th textAlign={"center"}>Aksi</Th>
                <Th></Th>
              </Tr>
            </Thead>

            <Tbody>
              {data.map((d, i) => (
                <Tr key={i}>
                  <Td isNumeric>{i + 1}</Td>
                  <Td>{d.id.toString().padStart(3, "0")}</Td>
                  <Td>{d.tanggalOrder}</Td>
                  <Td>{d.nama}</Td>
                  <Td>{d.produk}</Td>
                  <Td textAlign={"center"}>
                    <Badge
                      w={"100%"}
                      className="badge"
                      colorScheme={statusBadgeColor(d.status)}
                    >
                      {d.status}
                    </Badge>
                  </Td>
                  <Td textAlign={"center"}>
                    <AdminAksiPengujian status={d.status} />
                  </Td>
                  <Td
                    isNumeric
                    w={"40px"}
                  >
                    <DetailTransaksi id={d.id} />
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
      </Box>
    </AdminContainer>
  );
}
