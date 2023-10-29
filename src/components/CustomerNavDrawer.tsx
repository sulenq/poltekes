import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { List, X } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";
import customerNav from "../const/customerNav";
import { Link } from "react-router-dom";

type Props = {
  active: string;
};

export default function CustomerNavDrawer({ active }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="menu"
        icon={<Icon as={List} fontSize={iconSize} />}
        variant={"outline"}
        colorScheme="ap"
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
            zIndex={99}
            bg={"white"}
            _hover={{ bg: "white" }}
            _active={{ bg: "white" }}
            className="clicky"
            onClick={onClose}
          />

          <DrawerBody
            as={VStack}
            gap={0}
            align={"stretch"}
            p={0}
            position={"relative"}
            bg={"var(--drawer)"}
            backdropFilter={"blur(10px)"}
            py={5}
          >
            <Image
              src={"/images/navDrawerBg.png"}
              w={"100%"}
              position={"absolute"}
              bottom={0}
              opacity={0.1}
            />

            <VStack gap={0}>
              <Image src="/logo192.png" w={"48px"} mb={2} />

              <Text fontWeight={700} lineHeight={1}>
                POLTEKKES
              </Text>
              <Text fontWeight={500}>Kemenkes Semarang</Text>
            </VStack>

            <VStack
              zIndex={2}
              gap={0}
              borderRadius={16}
              py={6}
              px={8}
              align={"stretch"}
            >
              <HStack p={2} mb={6} bg={"var(--divider)"} borderRadius={8}>
                <Avatar name="Jolitos Kurniawan" src="/images/user.jpg" />

                <Box>
                  <Text fontWeight={600} lineHeight={1} mb={1}>
                    Jolitos Kurniawan
                  </Text>
                  <Text lineHeight={1} fontSize={[12, null, 14]}>
                    jolitos@gmail.com
                  </Text>
                </Box>
              </HStack>

              <VStack w={"100%"} align={"stretch"}>
                <Text fontWeight={500} opacity={0.5} ml={4}>
                  Main
                </Text>
                {customerNav.map((n, i) => (
                  <Button
                    key={i}
                    as={Link}
                    to={n.link}
                    variant={"ghost"}
                    bg={active === n.name ? "blackAlpha.200" : ""}
                    className="btn"
                    borderRadius={8}
                    color={"white"}
                  >
                    <HStack w={"100%"}>
                      <Icon
                        as={n.icon}
                        fontSize={iconSize}
                        weight={active === n.name ? "duotone" : "regular"}
                        mb={"2px"}
                      />

                      <Text fontWeight={500}>{n.name}</Text>
                    </HStack>
                  </Button>
                ))}
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
