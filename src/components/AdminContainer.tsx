import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import ContentContainer from "./ContentContainer";
import AdminNav from "./AdminNav";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import useScreenWidth from "../utils/useGetScreenWidth";
import Container from "./Container";

type Props = {
  children: JSX.Element;
  active: string;
};

export default function AdminContainer({ children, active }: Props) {
  const contentBg = useColorModeValue("var(--divider2)", "#111827");
  const sw = useScreenWidth();

  return (
    <HStack gap={0} minH={"100vh"} align={"stretch"}>
      <AdminNav active={active} />

      <Box
        bg={contentBg}
        flex={1}
        ml={sw < 770 ? "" : "80px"}
        pb={sw < 770 ? "60px" : ""}
      >
        <ContentContainer>
          <>
            <Container>
              <HStack py={[4, 5, 6]} justify={"space-between"} w={"100%"}>
                <Text fontSize={[22, null, 24]} fontWeight={600}>
                  {active}
                </Text>

                <ColorModeSwitcher fontSize={20} />
              </HStack>
            </Container>

            {children}
          </>
        </ContentContainer>
      </Box>
    </HStack>
  );
}
