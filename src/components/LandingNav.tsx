import { HStack } from "@chakra-ui/react";
import React from "react";
import landingNav from "../const/landingNav";
import useScreenWidth from "../utils/useGetScreenWidth";
import LandingNavDrawer from "./LandingNavDrawer";
import LandingNavItem from "./LandingNavItem";
import SigninModal from "./SigninModal";
import LandingHeader from "./LandingHeader";
import SignupModal from "./SignupModal";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export default function LandingNav() {
  const sw = useScreenWidth();

  return (
    <HStack justify={"space-between"} h={["80px", null, null]}>
      <HStack gap={4}>
        <LandingHeader />

        <HStack gap={0}>
          {sw >= 768 &&
            landingNav.map((n, i) => <LandingNavItem key={i} nav={n} />)}
        </HStack>
      </HStack>

      <HStack>
        {sw > 520 && (
          <>
            <ColorModeSwitcher />

            <SignupModal />

            <SigninModal />
          </>
        )}

        {sw < 768 && <LandingNavDrawer />}
      </HStack>
    </HStack>
  );
}
