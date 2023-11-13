import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import ContentContainer from "./ContentContainer";
import AdminNav from "./AdminNav";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import useScreenWidth from "../utils/useGetScreenWidth";

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

      <Box bg={contentBg} flex={1} pb={sw < 770 ? "60px" : ""}>
        <ContentContainer>
          <>
            <HStack px={6} py={4} justify={"space-between"} w={"100%"}>
              <Text fontSize={[22, null, 24]} fontWeight={600}>
                Dashborads
              </Text>

              <ColorModeSwitcher fontSize={20} />
            </HStack>
            {children}
          </>
        </ContentContainer>
      </Box>
    </HStack>
  );
}
