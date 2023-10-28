import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CustomerNav from "./CustomerNav";
import Container from "./Container";
import Footer from "./Footer";

type Props = {
  children: JSX.Element;
  active: string;
};

export default function CustomerContainer({ children, active }: Props) {
  return (
    <VStack gap={0} minH={"100vh"} align={"stretch"}>
      <Box
        id="nav"
        w={"100%"}
        boxShadow={"0 0 5px 5px var(--divider)"}
        position={"sticky"}
        top={0}
        bg={"white"}
        zIndex={99}
      >
        <Container justify={"center"}>
          <CustomerNav active={active} />
        </Container>
      </Box>

      {children}

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

      {/* <HStack
        position={"sticky"}
        bottom={0}
        w={"100%"}
        justify={"space-evenly"}
        bg={"white"}
        boxShadow={"0px -1px 2px 1px var(--divider)"}
        p={3}
      >
        {customerNav.map((n, i) => (
          <VStack key={i} gap={1} cursor={"pointer"} as={Link} to={n.link}>
            <Icon
              as={n.icon}
              fontSize={24}
              color={active === n.name ? "p.500" : ""}
              weight={active === n.name ? "duotone" : "regular"}
            />

            <Text fontSize={10} color={active === n.name ? "p.500" : ""}>
              {n.name}
            </Text>
          </VStack>
        ))}
      </HStack> */}
    </VStack>
  );
}
