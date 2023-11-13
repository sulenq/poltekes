import { Box, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import CustomerNav from "./CustomerNav";
import Container from "./Container";
import Footer from "./Footer";
import ContentContainer from "./ContentContainer";

type Props = {
  children: JSX.Element;
  active: string;
};

export default function CustomerContainer({ children, active }: Props) {
  const navBg = useColorModeValue("white", "dark");

  return (
    <VStack gap={0} minH={"100vh"} align={"stretch"}>
      <Box
        id="nav"
        w={"100%"}
        boxShadow={"0 0 5px 5px var(--divider)"}
        position={"sticky"}
        top={0}
        bg={navBg}
        zIndex={99}
      >
        <Container justify={"center"}>
          <CustomerNav active={active} />
        </Container>
      </Box>

      <ContentContainer>{children}</ContentContainer>

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
