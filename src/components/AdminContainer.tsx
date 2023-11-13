import {
  Avatar,
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ContentContainer from "./ContentContainer";
import AdminNav from "./AdminNav";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import useScreenWidth from "../utils/useGetScreenWidth";
import { CaretDown } from "@phosphor-icons/react";
import { iconSize } from "../const/sizes";

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
          <VStack px={[4, 5, 6]} w={"100%"} gap={0}>
            <HStack py={[3, 4, 5]} justify={"space-between"} w={"100%"}>
              <Text fontSize={[22, null, 24]} fontWeight={600}>
                {active}
              </Text>

              <HStack>
                <ColorModeSwitcher fontSize={20} className="btn-solid" />

                <HStack
                  bg={"var(--divider)"}
                  borderRadius={8}
                  p={2}
                  cursor={"pointer"}
                >
                  <Icon as={CaretDown} fontSize={iconSize} />

                  <Text>Admin</Text>

                  <Avatar name="Jolitos Kurniawan" size={"xs"} />
                </HStack>
              </HStack>
            </HStack>

            {children}
          </VStack>
        </ContentContainer>
      </Box>
    </HStack>
  );
}
