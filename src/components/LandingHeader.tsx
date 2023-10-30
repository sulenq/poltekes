import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function LandingHeader() {
  return (
    <HStack as={Link} to={"/"}>
      <Image src="/logo192.png" w={"48px"} />

      <Box mr={6}>
        <Text fontWeight={700} lineHeight={1.2}>
          POLTEKKES
        </Text>
        <Text fontWeight={500} lineHeight={1.2}>
          Kemenkes Semarang
        </Text>
      </Box>
    </HStack>
  );
}
