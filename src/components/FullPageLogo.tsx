import { Image, VStack } from "@chakra-ui/react";
import React from "react";

export default function FullPageLogo() {
  return (
    <VStack minH={'100vh'} justify={"center"}>
      <Image src="/logo192.png" />
    </VStack>
  );
}
