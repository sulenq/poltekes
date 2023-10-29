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
              <Image src="/logo192.png" w={"48px"} mb={2} />

              <Text fontWeight={700} lineHeight={1}>
                POLTEKKES
              </Text>
              <Text fontWeight={500}>Kemenkes Semarang</Text>
            </VStack>

            <VStack zIndex={2} borderRadius={16} p={6}>
              <Avatar
                size={"xl"}
                name="Jolitos Kurniawan"
                src="/images/user.jpg"
                mb={6}
              />

              <VStack w={"100%"}>
                {customerNav.map((n, i) => (
                  <Button
                    key={i}
                    as={Link}
                    to={n.link}
                    w={"90%"}
                    variant={"ghost"}
                    bg={active === n.name ? "var(--divider)" : ""}
                    className="btn"
                    borderRadius={"full"}
                    color={"white"}
                  >
                    <HStack w={"100%"} justify={"space-between"}>
                      <Text>{n.name}</Text>

                      <Icon
                        as={n.icon}
                        fontSize={iconSize}
                        weight={active === n.name ? "duotone" : "regular"}
                        mb={"2px"}
                      />
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
