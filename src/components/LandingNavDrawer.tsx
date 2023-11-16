import {
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
import SigninModal from "./SigninModal";
import useBackOnClose from "../utils/useBackOnClose";
import SignupModal from "./SignupModal";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export default function LandingNavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useBackOnClose(isOpen, onClose);

  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  return (
    <>
      <IconButton
        aria-label="nav button"
        icon={
          <Icon
            as={List}
            fontSize={iconSize}
            color={"p.500"}
          />
        }
        className="lg-clicky"
        variant={"outline"}
        colorScheme="ap"
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        onClose={handleOnClose}
      >
        <DrawerOverlay />

        <DrawerContent>
          <IconButton
            aria-label="close nav drawer"
            icon={
              <Icon
                as={X}
                fontSize={iconSize}
              />
            }
            borderRadius={"full"}
            position={"absolute"}
            left={-5}
            top={"calc(50% - 20px)"}
            // transform={"translate(0, -50%)"}
            zIndex={99}
            bg={"white"}
            color={"black"}
            _hover={{ bg: "white" }}
            _active={{ bg: "white" }}
            className="clicky"
            onClick={handleOnClose}
          />

          <DrawerBody
            as={VStack}
            align={"stretch"}
            p={0}
            position={"relative"}
            bg={"p.900"}
            py={5}
          >
            <Image
              src={"/images/navDrawerBg.png"}
              w={"100%"}
              position={"absolute"}
              bottom={0}
              opacity={0.1}
            />

            <VStack
              gap={0}
              position={"relative"}
            >
              <ColorModeSwitcher
                position={"absolute"}
                left={0}
                top={-3}
              />

              <Image
                src="/logo192.png"
                w={"48px"}
                mb={2}
              />

              <Text
                fontWeight={700}
                lineHeight={1}
              >
                POLTEKKES
              </Text>
              <Text fontWeight={500}>Kemenkes Semarang</Text>
            </VStack>

            <VStack
              w={"100%"}
              flex={1}
              py={6}
              px={10}
              align={"stretch"}
              justify={"space-between"}
            >
              <VStack
                w={"100%"}
                align={"stretch"}
              >
                <Text
                  fontWeight={500}
                  opacity={0.5}
                  ml={1}
                  fontSize={[12, null, 14]}
                >
                  NAVIGASI
                </Text>
                {landingNav.map((n, i) => (
                  <VStack
                    key={i}
                    align={"stretch"}
                    onClick={onClose}
                  >
                    <LandingNavItem nav={n} />
                  </VStack>
                ))}
              </VStack>

              <VStack align={"stretch"}>
                <SigninModal />

                <SignupModal />
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
