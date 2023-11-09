import React, { useState } from "react";
import CustomerContainer from "../../components/CustomerContainer";
import Container from "../../components/Container";
import {
  Box,
  Button,
  Checkbox,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import InformasiAkun from "../../components/InformasiAkun";
import StepperPengujian from "../../components/StepperPengujian";
import { CaretRight } from "@phosphor-icons/react";
import DetailMetodeUji from "../../components/DetailMetodeUji";
import DetailFotoSampel from "../../components/DetailFotoSampel";
import DetailFilePendukung from "../../components/DetailFilePendukung";
import DetailSummary from "../../components/DetailSummary";
import { checkBoxTextMt } from "../../const/sizes";

export default function DetailPengujian() {
  const [agreement, setAgreement] = useState(false);

  return (
    <CustomerContainer active="Pengujian">
      <Container>
        <Box>
          {/* Bread Crumbs */}
          <HStack className="breadcrumb" mt={6}>
            <Link to="/customer">Beranda</Link>
            <Icon as={CaretRight} opacity={0.3} />
            <Link to="/customer/pengujian">Pengujian</Link>
            <Icon as={CaretRight} opacity={0.3} />
            <Text className="breadcrumbCurrent">Detail Pengujian</Text>
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
          <StepperPengujian index={3} />
        </Box>

        <Box
          px={[4, 5, 6]}
          py={[3, 4, 4]}
          borderRadius={16}
          border={"1px solid var(--divider3)"}
          mb={8}
        >
          <HStack justify={"space-between"} mb={[4, 5, 6]}>
            <Text fontWeight={600}>Metode Uji</Text>

            <Button
              fontSize={[12, null, 14]}
              variant={"ghost"}
              colorScheme="ap"
              size={"sm"}
            >
              Ubah Metode
            </Button>
          </HStack>

          <Box mb={6}>
            <DetailMetodeUji />
          </Box>

          <HStack justify={"space-between"} mb={2}>
            <Text fontWeight={600}>Berkas Anda</Text>

            <Button
              fontSize={[12, null, 14]}
              variant={"ghost"}
              colorScheme="ap"
              size={"sm"}
            >
              Ubah Berkas
            </Button>
          </HStack>

          <Box mb={6}>
            <DetailFotoSampel />
          </Box>

          <Box mb={6}>
            <DetailFilePendukung />
          </Box>

          <Box mb={1}>
            <DetailSummary />
          </Box>
        </Box>

        <Stack
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
        </Stack>
      </Container>
    </CustomerContainer>
  );
}
