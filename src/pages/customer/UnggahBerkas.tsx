import React from "react";
import CustomerContainer from "../../components/CustomerContainer";
import {
  Alert,
  AlertDescription,
  AlertTitle,
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
import { CaretRight, Files, Images } from "@phosphor-icons/react";
import { iconSize } from "../../const/sizes";
import useScreenWidth from "../../utils/useGetScreenWidth";
import { Link } from "react-router-dom";
import TambahFotoSampelModal from "../../components/TambahFotoSampelModal";
import TambahFilePendukungModal from "../../components/TambahFilePendukungModal";
import InformasiAkun from "../../components/InformasiAkun";
import StepperPengujian from "../../components/StepperPengujian";
import DividerFullHorizontal from "../../components/DividerFullHorizontal";

export default function PendaftaranPengujian() {
  const sw = useScreenWidth();

  return (
    <CustomerContainer active={"Pengujian"}>
      <Container>
        <Box>
          {/* Bread Crumbs */}
          <HStack className="breadcrumb" mt={6}>
            <Link to="/customer">Beranda</Link>
            <Icon as={CaretRight} opacity={0.3} />
            <Link to="/customer/pengujian">Pengujian</Link>
            <Icon as={CaretRight} opacity={0.3} />
            <Text className="breadcrumbCurrent">Unggah Bekas</Text>
          </HStack>

          <Text fontSize={[22, null, 24]} fontWeight={600} mt={6} mb={6}>
            Pendaftaran Pengujian Online
          </Text>

          <SimpleGrid
            columns={[1, null, 2]}
            gap={6}
            px={[4, 5, 6]}
            pt={[5]}
            pb={[6]}
            bg={"var(--p500a)"}
            borderRadius={16}
          >
            <Box>
              <Text fontSize={[18, null, 20]} fontWeight={600} mb={4}>
                Data Pelanggan
              </Text>

              <InformasiAkun />
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

        <Box my={8}>
          <StepperPengujian index={2} />
        </Box>

        <Box
          px={[4, 5, 6]}
          py={[3, 4, 4]}
          borderRadius={16}
          border={"1px solid var(--divider3)"}
          mb={8}
        >
          <Text fontSize={[22, null, 24]} fontWeight={600} mb={[4, 5, 6]}>
            Unggah Berkas
          </Text>

          <Tabs isFitted variant="unstyled">
            <TabList borderRadius={8} bg={"var(--divider)"} mb={4}>
              <Tab borderRadius={8} _selected={{ bg: "p.500", color: "black" }}>
                <Icon as={Images} fontSize={iconSize} mr={[null, null, 2]} />
                {sw >= 768 && (
                  <Text fontWeight={500} fontSize={[12, null, 14]}>
                    Foto Sampel
                  </Text>
                )}
              </Tab>

              <Tab borderRadius={8} _selected={{ bg: "p.500", color: "black" }}>
                <Icon as={Files} fontSize={iconSize} mr={[null, null, 2]} />
                {sw > 768 && (
                  <Text fontWeight={500} fontSize={[12, null, 14]}>
                    File Pendukung
                  </Text>
                )}
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel p={0}>
                {sw < 768 && (
                  <Text fontSize={[16, null, 18]} fontWeight={600} mb={2}>
                    Foto Sampel
                  </Text>
                )}

                <Text mb={2}>Silakan Tambahkan Foto Sampel Uji Anda!!</Text>

                <TambahFotoSampelModal />

                <Text color={"red.400"} mb={4}>
                  *Minimal 1 foto sampel
                </Text>

                <DividerFullHorizontal mb={4} />

                <Center p={5} flexDir={"column"}>
                  <Image src="/svg/sampleImage.svg" maxW={"480px"} />
                  <Text textAlign={"center"} fontWeight={500} maxW={"400px"}>
                    Maaf, Saat Ini Anda Belum Memiliki Foto Sampel yang Tersedia
                  </Text>
                </Center>
              </TabPanel>

              <TabPanel p={0}>
                {sw < 768 && (
                  <Text fontSize={[16, null, 18]} fontWeight={600} mb={2}>
                    File Pendukung
                  </Text>
                )}

                <Alert
                  flexDir={"column"}
                  alignItems={"flex-start"}
                  variant={"left-accent"}
                  borderRadius={8}
                  mb={4}
                  minW={"100%"}
                >
                  <AlertTitle
                    color={"blue.500"}
                    fontSize={[18, null, 20]}
                    mb={1}
                  >
                    Unduh Berkas Kontrak Anda Disini!!
                  </AlertTitle>
                  <AlertDescription mb={3}>
                    Silahkan klik tombol dibawah ini untuk mengunduh berkas
                    kontrak anda.
                  </AlertDescription>
                  <Button colorScheme="blue" className="lg-clicky">
                    Unduh Berkas
                  </Button>
                </Alert>

                <TambahFilePendukungModal />

                <Text color={"red.400"} mb={4}>
                  *Berkas Kontrak Wajib di Unggah
                </Text>

                <DividerFullHorizontal mb={4} />

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

        <HStack justify={"flex-end"} gap={2} mb={6}>
          <Button variant={"ghost"} colorScheme="ap" className="lg-clicky">
            Kembali
          </Button>

          {/* TODO verify data, is exist can navigate to next step */}
          <Button
            colorScheme="ap"
            className="lg-clicky"
            as={Link}
            to={"/customer/pengujian/pendaftaran-pengujian/1/detail-pengujian"}
          >
            Lanjutkan
          </Button>
        </HStack>

        {/* <Stack
          flexDir={["column", "row", "row"]}
          align={["strech", null, "center"]}
          gap={4}
          mb={6}
          justify={"space-between"}
        >
          <Checkbox
            colorScheme="ap"
            alignItems={"flex-start"}
            maxW={"600px"}
            isChecked={agreement}
            onChange={() => {
              setAgreement((ps) => !ps);
            }}
          >
            <Text mt={checkBoxTextMt} fontSize={[12, null, 14]}>
              Saya dengan ini menyatakan setuju dengan{" "}
              <ChakraLink
                color="p.500"
                href="/syarat-dan-ketentuan"
                fontSize={["12px !important", null, "14px !important"]}
                isExternal
                fontWeight={600}
              >
                syarat dan ketentuan
              </ChakraLink>{" "}
              yang berlaku di LPPT POLTEKKES Kemenkes Semarang
            </Text>
          </Checkbox>

          <Button
            flexShrink={0}
            colorScheme="ap"
            className="lg-clicky"
            h={"50px"}
            isDisabled={!agreement}
          >
            Simpan & Kirim
          </Button>
        </Stack> */}
      </Container>
    </CustomerContainer>
  );
}
