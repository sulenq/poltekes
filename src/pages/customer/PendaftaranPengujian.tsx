import React from "react";
import CustomerContainer from "../../components/CustomerContainer";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  HStack,
  Icon,
  IconButton,
  Image,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import Container from "../../components/Container";
import {
  DotsThreeVertical,
  Eyedropper,
  Files,
  Images,
  Plus,
  Trash,
} from "@phosphor-icons/react";
import { iconSize } from "../../const/sizes";
import ContentContainer from "../../components/ContentContainer";
import TableContainer from "../../components/TableContainer";
import useScreenWidth from "../../utils/useGetScreenWidth";

export default function PendaftaranPengujian() {
  // TODO show riwayat pengujian table data
  const sw = useScreenWidth();

  return (
    <CustomerContainer active={"Pengujian"}>
      <ContentContainer>
        <Container>
          <Box>
            <Text fontSize={[22, null, 24]} fontWeight={600} mt={6} mb={6}>
              Pendaftaran Pengujian Online
            </Text>

            <SimpleGrid
              columns={[1, null, 2]}
              gap={6}
              p={[4, 5, 6]}
              bg={"p.100"}
              borderRadius={16}
              mb={8}
            >
              <Box>
                <Text fontSize={[18, null, 20]} fontWeight={600} mb={4}>
                  Data Pelanggan
                </Text>

                <HStack gap={4}>
                  <VStack align={"flex-start"}>
                    <Text>Kategori</Text>
                    <Text>Nama</Text>
                    <Text>Alamat</Text>
                    <Text>Telepon</Text>
                    <Text>Email</Text>
                    <Text>Instansi</Text>
                    <Text>Alamat Instansi</Text>
                  </VStack>

                  <VStack align={"flex-start"}>
                    <Text>:</Text>
                    <Text>:</Text>
                    <Text>:</Text>
                    <Text>:</Text>
                    <Text>:</Text>
                    <Text>:</Text>
                    <Text>:</Text>
                  </VStack>

                  <VStack align={"flex-start"}>
                    <Text>Umum</Text>
                    <Text>Jolitos Kurniawan</Text>
                    <Text>Jalan Banjarsari no.12</Text>
                    <Text>+62 81901222775</Text>
                    <Text>jolitos@gmail.com</Text>
                    <Text>Poltekkes Kemenkes Semarang</Text>
                    <Text>gatau bang</Text>
                  </VStack>
                </HStack>
              </Box>

              <Box>
                <Text fontSize={[18, null, 20]} fontWeight={600} mb={4}>
                  Informasi Transaksi
                </Text>

                <HStack gap={4}>
                  <VStack align={"flex-start"}>
                    <Text>Jenis</Text>
                    <Text>Nama</Text>
                    <Text>Alamat Sertifikat</Text>
                    <Text>Tanggal Pendaftaran</Text>
                  </VStack>

                  <VStack align={"flex-start"}>
                    <Text>:</Text>
                    <Text>:</Text>
                    <Text>:</Text>
                    <Text>:</Text>
                  </VStack>

                  <VStack align={"flex-start"}>
                    <Text>Umum</Text>
                    <Text>Jolitos Kurniawan</Text>
                    <Text>Jalan Banjarsari no.12</Text>
                    <Text>22 Oktober 2023</Text>
                  </VStack>
                </HStack>
              </Box>
            </SimpleGrid>
          </Box>

          <Box
            p={[4, 5, 6]}
            borderRadius={16}
            border={"1px solid var(--divider3)"}
            mb={8}
          >
            <Text fontSize={[22, null, 24]} fontWeight={600} mb={6}>
              Berkas
            </Text>

            <Tabs isFitted variant="unstyled">
              <TabList borderRadius={8} bg={"var(--divider)"} mb={4}>
                <Tab
                  borderRadius={8}
                  _selected={{ bg: "p.500", color: "white" }}
                >
                  <Icon
                    as={Eyedropper}
                    fontSize={iconSize}
                    mr={[null, null, 2]}
                  />
                  {sw >= 770 && (
                    <Text fontWeight={500} fontSize={[12, null, 14]}>
                      Sampel & Parameter
                    </Text>
                  )}
                </Tab>

                <Tab
                  borderRadius={8}
                  _selected={{ bg: "p.500", color: "white" }}
                >
                  <Icon as={Images} fontSize={iconSize} mr={[null, null, 2]} />
                  {sw >= 770 && (
                    <Text fontWeight={500} fontSize={[12, null, 14]}>
                      Foto Sampel
                    </Text>
                  )}
                </Tab>

                <Tab
                  borderRadius={8}
                  _selected={{ bg: "p.500", color: "white" }}
                >
                  <Icon as={Files} fontSize={iconSize} mr={[null, null, 2]} />
                  {sw > 770 && (
                    <Text fontWeight={500} fontSize={[12, null, 14]}>
                      File Pendukung
                    </Text>
                  )}
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel p={0}>
                  {sw < 770 && (
                    <Text fontSize={[16, null, 18]} fontWeight={600} mb={2}>
                      Sampel & Parameter
                    </Text>
                  )}

                  <Text mb={2}>Silakan Buat Sampel Uji Anda!!</Text>

                  <Button
                    leftIcon={
                      <Icon as={Plus} fontSize={iconSize} weight="bold" />
                    }
                    colorScheme="ap"
                    className="lg-clicky"
                    mb={4}
                  >
                    Masukkan Sampel
                  </Button>

                  <Box
                    w={"100%"}
                    h={"1px"}
                    borderBottom={"1px solid var(--divider3)"}
                    mb={4}
                  />

                  <Box mb={4}>
                    <SimpleGrid columns={[1, 1, 2, 2]} gap={2} mb={4}>
                      <HStack>
                        <Icon as={Eyedropper} fontSize={iconSize} />
                        <Text fontWeight={500}>001 - Anjay Sample</Text>
                      </HStack>

                      <ButtonGroup
                        justifySelf={[null, null, "flex-end", "flex-end"]}
                      >
                        <IconButton
                          aria-label="delete sample"
                          icon={<Icon as={Trash} fontSize={iconSize} />}
                          variant={"outline"}
                          colorScheme="red"
                          className="clicky"
                        />
                        <Button
                          leftIcon={
                            <Icon as={Plus} fontSize={iconSize} weight="bold" />
                          }
                          variant={"outline"}
                          colorScheme="ap"
                          className="lg-clicky"
                        >
                          Masukkan Parameter
                        </Button>
                      </ButtonGroup>
                    </SimpleGrid>

                    <TableContainer>
                      <Table>
                        <Thead>
                          <Tr>
                            <Th>No</Th>
                            <Th>Metode</Th>
                            <Th>Parameter</Th>
                            <Th isNumeric>Harga</Th>
                            <Th isNumeric></Th>
                          </Tr>
                        </Thead>

                        <Tbody>
                          <Tr>
                            <Td>1</Td>
                            <Td>Gatau</Td>
                            <Td>Kucing</Td>
                            <Td isNumeric>2.000.000</Td>
                            <Td isNumeric>
                              <IconButton
                                aria-label="more"
                                icon={
                                  <Icon
                                    as={DotsThreeVertical}
                                    fontSize={iconSize}
                                    weight="bold"
                                  />
                                }
                                variant={"ghost"}
                                className="btn"
                                borderRadius={"full"}
                              />
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Box>

                  <Center p={5} flexDir={"column"}>
                    <Image src="/svg/sample.svg" maxW={"480px"} />
                    <Text textAlign={"center"} fontWeight={500} maxW={"400px"}>
                      Maaf, Saat Ini Anda Belum Memiliki Sampel Uji yang
                      Tersedia
                    </Text>
                  </Center>
                </TabPanel>

                <TabPanel p={0}>
                  {sw < 770 && (
                    <Text fontSize={[16, null, 18]} fontWeight={600} mb={2}>
                      Foto Sampel
                    </Text>
                  )}

                  <Text mb={2}>Silakan Tambahkan Foto Sampel Uji Anda!!</Text>

                  <Button
                    leftIcon={
                      <Icon as={Plus} fontSize={iconSize} weight="bold" />
                    }
                    colorScheme="ap"
                    className="lg-clicky"
                    mb={4}
                  >
                    Masukkan File Pendukung
                  </Button>

                  <Box
                    w={"100%"}
                    h={"1px"}
                    borderBottom={"1px solid var(--divider3)"}
                    mb={4}
                  />

                  <Center p={5} flexDir={"column"}>
                    <Image src="/svg/sampleImage.svg" maxW={"480px"} />
                    <Text textAlign={"center"} fontWeight={500} maxW={"400px"}>
                      Maaf, Saat Ini Anda Belum Memiliki Foto Sampel yang
                      Tersedia
                    </Text>
                  </Center>
                </TabPanel>

                <TabPanel p={0}>
                  {sw < 770 && (
                    <Text fontSize={[16, null, 18]} fontWeight={600} mb={2}>
                      File Pendukung
                    </Text>
                  )}

                  <Text mb={2}>Silakan Tambahkan Foto Sampel Uji Anda!!</Text>

                  <Button
                    leftIcon={
                      <Icon as={Plus} fontSize={iconSize} weight="bold" />
                    }
                    colorScheme="ap"
                    className="lg-clicky"
                    mb={4}
                  >
                    Masukkan Sampel
                  </Button>

                  <Box
                    w={"100%"}
                    h={"1px"}
                    borderBottom={"1px solid var(--divider3)"}
                    mb={4}
                  />

                  <Center p={5} flexDir={"column"}>
                    <Image src="/svg/file.svg" maxW={"480px"} />
                    <Text textAlign={"center"} fontWeight={500} maxW={"400px"}>
                      Maaf, Saat Ini Anda Belum Memiliki File Pendukung yang
                      Tersedia
                    </Text>
                  </Center>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </ContentContainer>
    </CustomerContainer>
  );
}
