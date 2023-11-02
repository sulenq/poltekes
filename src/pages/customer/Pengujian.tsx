import React from "react";
import CustomerContainer from "../../components/CustomerContainer";
import {
  Badge,
  Box,
  HStack,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Container from "../../components/Container";
import TableContainer from "../../components/TableContainer";
import { CaretRight, DotsThreeVertical } from "@phosphor-icons/react";
import { iconSize } from "../../const/sizes";
import ContentContainer from "../../components/ContentContainer";
import PendaftaranPengujianModal from "../../components/PendaftaranPengujianModal";
import { Link } from "react-router-dom";

export default function Pengujian() {
  // TODO show riwayat pengujian table data

  return (
    <CustomerContainer active={"Pengujian"}>
      <ContentContainer>
        <Container>
          <Box>
            <HStack className="breadcrumb" mt={6}>
              <Link to="/customer">Beranda</Link>
              <Icon as={CaretRight} opacity={0.3} />
              <Text className="breadcrumbCurrent">Pengujian</Text>
            </HStack>

            <Text fontSize={[22, null, 24]} fontWeight={600} mt={6} mb={6}>
              Pendaftaran Pengujian Online
            </Text>

            <Text mb={4}>
              Untuk Pendaftaran Sampel Pengujian Online, Klik dibawah ini!!!
            </Text>

            <PendaftaranPengujianModal />

            <Box
              px={[4, 5, 6]}
              py={[3, 4, 4]}
              bg={"p.100"}
              borderRadius={16}
              mb={8}
            >
              <Text lineHeight={"30px"}>
                Permohonan Penelitian dengan Status <b>Uji Kompetensi</b> Akan
                Diproses Setelah Calon Peneliti Lulus Uji Kompetensi yang
                Dijadwalkan oleh LPPT UGM. Jika Tidak Lulus, Anda Dapat
                Mengulang Uji Kompetensi Pada Jadwal Tes Selanjutnya. Untuk
                Informasi Lebih Lanjut, Silakan Hubungi Layanan Pelanggan Kami
              </Text>
            </Box>
          </Box>

          <Box>
            <Text fontSize={[22, null, 24]} fontWeight={600} my={6}>
              Riwayat Pengujian
            </Text>

            <Text mb={4}>Telusuri Perjalanan Pengujian Anda</Text>
          </Box>

          <Box mb={8}>
            <TableContainer>
              <Table size={"sm"} variant={"striped"} colorScheme="ad">
                <Thead>
                  <Tr>
                    <Th isNumeric>No</Th>
                    <Th>No.Registrasi</Th>
                    <Th whiteSpace={"nowrap"}>Tanggal Order</Th>
                    <Th>Nama</Th>
                    <Th whiteSpace={"nowrap"}>Status Pembayaran</Th>
                    <Th isNumeric></Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {/* TODO show data */}

                  <Tr bg={"var(--divider)"}>
                    <Td isNumeric>1</Td>
                    <Td>001</Td>
                    <Td>22 Okt 2023</Td>
                    <Td>Anjay</Td>
                    <Td>
                      <Badge colorScheme="red" className="redBadge">
                        Belum Dibayar
                      </Badge>
                    </Td>
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
        </Container>
      </ContentContainer>
    </CustomerContainer>
  );
}
