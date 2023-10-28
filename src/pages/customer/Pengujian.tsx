import React from "react";
import CustomerContainer from "../../components/CustomerContainer";
import { VStack } from "@chakra-ui/react";

export default function Pengujian() {
  return (
    <CustomerContainer active={"Pengujian"}>
      <VStack gap={0}></VStack>
    </CustomerContainer>
  );
}
