import { HStack } from "@chakra-ui/react";
import React from "react";
import landingNav from "../const/landingNav";
import useScreenWidth from "../utils/useGetScreenWidth";
import LandingNavDrawer from "./LandingNavDrawer";
import LandingNavItem from "./LandingNavItem";
import SigninModal from "./SigninModal";
import LandingHeader from "./LandingHeader";

export default function LandingNav() {
  const sw = useScreenWidth();

  return (
    <HStack justify={"space-between"} h={["80px", null, null]}>
      <HStack gap={4}>
        <LandingHeader />

        <HStack gap={0}>
          {sw >= 770 &&
            landingNav.map((n, i) => <LandingNavItem key={i} nav={n} />)}
        </HStack>
      </HStack>

      <HStack>
        <SigninModal />

        {sw < 770 && <LandingNavDrawer />}
      </HStack>
    </HStack>
  );
}
