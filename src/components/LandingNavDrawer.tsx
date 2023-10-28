import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import landingNav from "../const/landingNav";
import { List } from "@phosphor-icons/react/dist/ssr";
import { iconSize } from "../const/sizes";
import { X } from "@phosphor-icons/react";
import LandingNavItem from "./LandingNavItem";

type Props = { active: string };

export default function LandingNavDrawer({ active }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        size={"sm"}
        aria-label="nav button"
        icon={<Icon as={List} fontSize={iconSize} color={"p.500"} />}
        className="btn-p-outline clicky"
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <IconButton
            aria-label="close nav drawer"
            icon={<Icon as={X} fontSize={iconSize} />}
            borderRadius={"full"}
            position={"absolute"}
            left={-5}
            top={"calc(50% - 20px)"}
            // transform={"translate(0, -50%)"}
            zIndex={99}
            bg={"white"}
            _hover={{ bg: "white" }}
            _active={{ bg: "white" }}
            className="clicky"
            onClick={onClose}
          />

          <DrawerBody
            as={VStack}
            justify={"center"}
            align={"stretch"}
            p={0}
            position={"relative"}
            bg={"p.900"}
            py={5}
          >
            <Box
              bgImage={"/images/navDrawerBg.png"}
              bgSize={"cover"}
              bgPos={"center"}
              w={"100%"}
              h={"100vh"}
              position={"absolute"}
              top={0}
              opacity={0.1}
            />

            <VStack mb={8} gap={0}>
              <Image src="logo192.png" w={"48px"} mb={2} />

              <Text fontWeight={700} lineHeight={1}>
                POLTEKKES
              </Text>
              <Text fontWeight={500}>Kemenkes Semarang</Text>
            </VStack>

            <VStack>
              {landingNav.map((n, i) => (
                <VStack key={i} w={"50%"} align={"stretch"} onClick={onClose}>
                  <LandingNavItem nav={n} />
                </VStack>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
