import React from "react";
import CustomerContainer from "../../components/CustomerContainer";
import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import Container from "../../components/Container";
import { Eyedropper, Files, Images, Plus } from "@phosphor-icons/react";
import { iconSize } from "../../const/sizes";
import ContentContainer from "../../components/ContentContainer";
import useScreenWidth from "../../utils/useGetScreenWidth";
// import SampleList from "../../components/SampleList";

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
            <Text fontSize={[22, null, 24]} fontWeight={600} mb={[4, 5, 6]}>
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

                  {/* <SampleList /> */}

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
