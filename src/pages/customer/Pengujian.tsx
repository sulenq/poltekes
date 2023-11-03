import React from "react";
import CustomerContainer from "../../components/CustomerContainer";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import Container from "../../components/Container";
import { CaretRight } from "@phosphor-icons/react";
import ContentContainer from "../../components/ContentContainer";
import PendaftaranPengujianModal from "../../components/PendaftaranPengujianModal";
import { Link } from "react-router-dom";
import RiwayatPengujianList from "../../components/RiwayatPengujianList";

export default function Pengujian() {
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
            <RiwayatPengujianList />
          </Box>
        </Container>
      </ContentContainer>
    </CustomerContainer>
  );
}
