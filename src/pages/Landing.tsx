import { Box, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Container from "../components/Container";
import LandingNav from "../components/LandingNav";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <VStack gap={0} minH={"100vh"}>
      <Box
        id="nav"
        w={"100%"}
        boxShadow={"0 0 5px 5px var(--divider)"}
        position={"sticky"}
        top={0}
        bg={"white"}
        zIndex={99}
      >
        <Container h={"80px"} justify={"center"}>
          <LandingNav active={"Beranda"} />
        </Container>
      </Box>

      <Box id="Beranda" w={"100%"}>
        <VStack w={"100%"} gap={0} bg={"var(--divider)"}>
          <Container>
            <HStack
              flexDir={["column", null, "row"]}
              gap={[6, null, 8]}
              py={["18px", null, 20]}
              align={"stretch"}
            >
              <Image
                src="/images/hero.png"
                h={"100%"}
                objectFit={"contain"}
                maxW={["100%", null, "352px"]}
                borderRadius={"24px"}
                boxShadow={"10px 10px 0 0 var(--divider)"}
                // position={[null, null, "sticky"]}
                // top={[null, null, "96px"]}
              />

              <Box>
                <Text fontSize={32} fontWeight={700} mb={8} lineHeight={1.2}>
                  <span style={{ color: "var(--p500)" }}>Poltekkes</span>{" "}
                  Kemenkes Semarang
                </Text>

                <Text lineHeight={"187.5%"}>
                  <b>Poltekkes Kemenkes Semarang</b> melayani pengujian untuk
                  Laboratorium Radiologi. Bidang pengujian yang dilayani oleh
                  Poltekkes Kemenkes Semarang meliputi bidang fisika. Sampel
                  yang dapat dilakukan pengujian di Poltekkes Kemenkes Semarang
                  meliputi pesawat radiologi umum, pesawat radiologi mobile, dan
                  pesawat radiologi dental di lokasi pelanggan (rumah sakit,
                  klinik, atau fasilitas kesehatan lainnya). Metode yang
                  digunakan dikembangkan dari metode Uji Kesesuaian Pesawat
                  Radiografi yang diterbitkan oleh{" "}
                  <b>Badan Pengawas Tenaga Nuklir</b> dengan pengembangan berupa
                  uji HVL yang disesuaikan dengan metode uji yang diterbitkan
                  produsen alat.
                </Text>
              </Box>
            </HStack>
          </Container>
        </VStack>

        <Container my={12}>
          <Text fontSize={24} fontWeight={700} mb={6}>
            Kegiatan Pengujian
          </Text>

          <Text lineHeight={"187.5%"} mb={6}>
            Manajemen Poltekkes Kemenkes Semarang mempunyai komitmen pada
            praktek profesional dan mutu pengujian dalam melayani mitra kerja
            dan pelanggan. Selain itu, dalam melaksanakan pengujian Poltekkes
            Kemenkes Semarang mengacu pada sistem manajemen mutu laboratorium
            ISO/IEC 17025:2017, mengutamakan mutu dan kepuasan mitra kerja dan
            pelanggan, serta menjamin pekerjaan pengujian dilakukan dengan
            kejujuran teknis, teliti, akurat, dan terjaga kerahasiaannya. Pada
            tahun 2023 Poltekkes Kemenkes Semarang memiliki kompetensi pengujian
            yang telah terakreditasi oleh Komite Akreditasi Nasional (KAN).
            Berikut ini merupakan sertifikat akreditasi yang telah menunjukkan
            kompetensi sebagai <b>Laboratorium Penguji</b> LP-1786-IDN yang
            secara konsisten menerapkan standar SNI ISO/IEC 17025:2017 (ISO/IEC
            17025:2017).
          </Text>

          <SimpleGrid columns={[1, null, 2]} gap={6}>
            <Image src="/images/sertif1.png" />
            <Image src="/images/sertif2.png" />
          </SimpleGrid>
        </Container>
      </Box>

      <Container id="FAQ" py={12}>
        <Faq />
      </Container>

      <VStack bg={"p.900"} w={"100%"} py={8}>
        <Container>
          <Footer />
        </Container>
      </VStack>

      <VStack w={"100%"} bg={"p.900"}>
        <Container py={2} borderTop={"1px solid var(--divider)"}>
          <Text
            textAlign={"center"}
            color={"white"}
            fontSize={[10, null, 12]}
            opacity={0.5}
          >
            © 2023 by <span style={{ fontWeight: 600 }}>Distro Studio</span>
          </Text>
        </Container>
      </VStack>
    </VStack>
  );
}
