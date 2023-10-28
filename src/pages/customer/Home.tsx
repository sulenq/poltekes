import React from "react";
import CustomerContainer from "../../components/CustomerContainer";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <CustomerContainer active={"Beranda"}>
      <VStack gap={0}></VStack>
    </CustomerContainer>
  );
}
