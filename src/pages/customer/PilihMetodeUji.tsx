import React from "react";
import CustomerContainer from "../../components/CustomerContainer";
import Container from "../../components/Container";
import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CaretRight, Funnel, MagnifyingGlass } from "@phosphor-icons/react";
import InformasiAkun from "../../components/InformasiAkun";
import StepperPengujian from "../../components/StepperPengujian";
import { iconSize } from "../../const/sizes";
import MetodeUjiList from "../../components/MetodeUjiList";

export default function PilihMetodeUji() {
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
            <Text className="breadcrumbCurrent">Pilih Metode Uji</Text>
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
            bg={"p.100"}
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
          <StepperPengujian index={1} />
        </Box>

        <HStack gap={4} mb={4}>
          {/* TODO, searchnya client side atau server side */}

          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={MagnifyingGlass} fontSize={iconSize} />
            </InputLeftElement>
            <Input placeholder="Cari metode uji" maxW={"352px"} />
          </InputGroup>

          <Button
            variant={"outline"}
            colorScheme="ap"
            leftIcon={<Icon as={Funnel} fontSize={iconSize} />}
            pl={"14px"}
            className="lg-clicky"
          >
            Filter
          </Button>
        </HStack>

        <Box mb={6}>
          <MetodeUjiList />
        </Box>
      </Container>
    </CustomerContainer>
  );
}
