import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import landingNav from "../const/landingNav";
import useScreenWidth from "../utils/useGetScreenWidth";
import LandingNavDrawer from "./LandingNavDrawer";
import LandingNavItem from "./LandingNavItem";
import SigninModal from "./SigninModal";

type Props = { active: string };

export default function LandingNav({ active }: Props) {
  const sw = useScreenWidth();

  return (
    <HStack justify={"space-between"}>
      <HStack>
        <Image src="logo192.png" w={"48px"} />

        <Box mr={6}>
          <Text fontWeight={700} mb={"-3px"}>
            POLTEKKES
          </Text>
          <Text fontWeight={500}>Kemenkes Semarang</Text>
        </Box>

        {sw >= 770 &&
          landingNav.map((n, i) => <LandingNavItem key={i} nav={n} />)}
      </HStack>

      <HStack>
        <SigninModal />

        {sw < 770 && <LandingNavDrawer active={active} />}
      </HStack>
    </HStack>
  );
}
