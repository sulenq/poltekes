import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Icon,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import landingNav from "../const/landingNav";
import { List } from "@phosphor-icons/react/dist/ssr";
import { iconSize } from "../const/sizes";
import { X } from "@phosphor-icons/react";

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
            // size={"sm"}
            position={"absolute"}
            left={-4}
            top={"50%"}
            transform={"translate(0, -50%)"}
            zIndex={99}
            onClick={onClose}
          />

          <DrawerBody p={0} position={"relative"}>
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

            <VStack minH={"100vh"} bg={"p.900"} p={5} justify={"center"}>
              <VStack mb={8} gap={0}>
                <Image src="logo192.png" w={"48px"} mb={2} />

                <Text fontWeight={700} lineHeight={1}>
                  POLTEKKES
                </Text>
                <Text fontWeight={500}>Kemenkes Semarang</Text>
              </VStack>

              {landingNav.map((n, i) => (
                <Button
                  key={i}
                  as={Link}
                  variant={"ghost"}
                  borderRadius={0}
                  className="btn"
                  color={active === n.name ? "p.500" : ""}
                  borderBottom={
                    active === n.name ? "2px solid var(--p500)" : ""
                  }
                  mb={2}
                >
                  {n.name}
                </Button>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
