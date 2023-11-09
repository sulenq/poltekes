import React from "react";
import CustomerContainer from "../../components/CustomerContainer";
import Container from "../../components/Container";
import { Box, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import InformasiAkun from "../../components/InformasiAkun";
import PengumumanList from "../../components/PengumumanList";
import customerMenus from "../../const/customerMenus";
import { Link } from "react-router-dom";

export default function Beranda() {
  return (
    <CustomerContainer active={"Beranda"}>
      <>
        <VStack w={"100%"} gap={0} bg={"var(--divider)"}>
          <Container>
            <SimpleGrid columns={[1, null, 2]} py={12} gap={12}>
              <Box>
                <Text fontSize={[18, null, 20]} fontWeight={600} mb={4}>
                  Informasi Akun
                </Text>

                <InformasiAkun />
              </Box>

              <Box>
                <Text fontSize={[18, null, 20]} fontWeight={600} mb={4}>
                  Pengumuman
                </Text>

                <PengumumanList />
              </Box>
            </SimpleGrid>
          </Container>
        </VStack>

        <Container py={12}>
          <Text fontSize={[18, null, 20]} fontWeight={600} mb={4}>
            Menu
          </Text>

          <SimpleGrid columns={[2, 3, 4]} gap={[4, 5, 6]}>
            {customerMenus.map((menu, i) => (
              <VStack
                gap={0}
                key={i}
                p={4}
                borderRadius={16}
                bg={"p.500"}
                as={Link}
                to={menu.link}
                className="lg-clicky"
                transition={"200ms"}
              >
                <Image src={menu.img} w={"80%"} mt={2} mb={4} />

                <Text
                  fontSize={[16, null, 18]}
                  fontWeight={600}
                  color={"white"}
                >
                  {menu.name}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </>
    </CustomerContainer>
  );
}
