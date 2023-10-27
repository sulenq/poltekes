import { Box, Button, HStack, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import landingNav from "../const/landingNav";
import useScreenWidth from "../utils/useGetScreenWidth";
import LandingNavDrawer from "./LandingNavDrawer";

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
          landingNav.map((n, i) => (
            <Button
              key={i}
              as={Link}
              variant={"ghost"}
              borderRadius={0}
              className="btn"
              color={active === n.name ? "p.500" : ""}
              borderBottom={active === n.name ? "2px solid var(--p500)" : ""}
            >
              {n.name}
            </Button>
          ))}
      </HStack>

      <HStack>
        <Button colorScheme="ap" className="clicky" size={["sm", null, "md"]}>
          Masuk
        </Button>

        {sw < 770 && <LandingNavDrawer active={active} />}
      </HStack>
    </HStack>
  );
}
