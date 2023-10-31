import React from "react";
import CustomerContainer from "../../components/CustomerContainer";
import ContentContainer from "../../components/ContentContainer";
import Container from "../../components/Container";
import { HStack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <CustomerContainer active={"Beranda"}>
      <ContentContainer>
        <Container>
          <HStack className="breadcrumb" mt={6}>
            <Text className="breadcrumbCurrent">Beranda</Text>
          </HStack>
        </Container>
      </ContentContainer>
    </CustomerContainer>
  );
}
