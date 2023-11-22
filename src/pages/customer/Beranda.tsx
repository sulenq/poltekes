import React from "react";
import CustomerContainer from "../../components/CustomerContainer";
import Container from "../../components/Container";
import { Box, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import InformasiAkun from "../../components/InformasiAkun";
import PengumumanList from "../../components/PengumumanList";
import customerMenus from "../../const/customerMenus";
import { Link } from "react-router-dom";
import useScreenWidth from "../../utils/useGetScreenWidth";

export default function Beranda() {
  const sw = useScreenWidth();

  return (
    <CustomerContainer active={"Beranda"}>
      <>
        <VStack w={"100%"} gap={0} bg={"var(--divider)"}>
          <Container>
            <SimpleGrid columns={[1, null, 1, 2]} py={12} gap={12}>
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

          <SimpleGrid columns={sw < 660 ? 1 : sw < 900 ? 2 : 3} gap={4}>
            {customerMenus.map((menu, i) => (
              <HStack
                gap={0}
                key={i}
                p={4}
                pl={0}
                borderRadius={16}
                bg={"p.500"}
                as={Link}
                to={menu.link}
                className="lg-clicky"
                transition={"200ms"}
                position={"relative"}
              >
                <Image src={menu.img} h={"120px"} />

                <Text
                  fontSize={[20, null, 22]}
                  fontWeight={600}
                  color={"white"}
                  w={"100%"}
                  textAlign={"center"}
                >
                  {menu.name}
                </Text>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </>
    </CustomerContainer>
  );
}
