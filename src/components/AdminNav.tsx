import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import useScreenWidth from "../utils/useGetScreenWidth";
import adminNav from "../const/adminNav";
import { Link } from "react-router-dom";
import { CaretDown } from "@phosphor-icons/react";
import { iconSize } from "../const/sizes";
import useSideNav from "../globalState/useSideNav";

type Props = {
  active: string[];
};

export default function AdminNav({ active }: Props) {
  const navBg = useColorModeValue("white", "dark");
  const { isOpen, setIsOpen } = useSideNav();
  const sw = useScreenWidth();

  const handleOnOpen = () => {
    setIsOpen(true);
  };

  const handleOnClose = () => {
    setIsOpen(false);
  };

  if (sw < 770) {
    return (
      <HStack
        h={"60px"}
        bg={navBg}
        position={"fixed"}
        w={"100%"}
        justify={"center"}
        bottom={0}
        left={0}
        zIndex={99}
        borderTop={"1px solid var(--divider2)"}
      >
        {adminNav.map((n, i) => (
          <VStack
            as={Link}
            to={n.link}
            key={i}
            h={"100%"}
            gap={"2px"}
            justify={"flex-end"}
            className={
              active.includes(n.name)
                ? "active-mobile adminNavItemMobile"
                : "adminNavItemMobile"
            }
          >
            <Icon
              as={n.icon}
              fontSize={24}
              weight="fill"
            />
            <Text fontSize={10}>{n.name}</Text>
          </VStack>
        ))}
      </HStack>
    );
  }

  return (
    <>
      {isOpen && (
        <Box
          position={"fixed"}
          height={"100vh"}
          width={"100vw"}
          bg={"#5b5b5b50"}
          backdropFilter={"blur(5px)"}
          zIndex={2}
          onClick={() => {
            setIsOpen(false);
          }}
        />
      )}

      <Box
        w={isOpen ? "312px" : "80px"}
        bg={navBg}
        transition={"200ms"}
        onMouseEnter={handleOnOpen}
        onMouseLeave={handleOnClose}
        position={"fixed"}
        left={0}
        top={0}
        minH={"100vh"}
        zIndex={2}
      >
        <VStack
          gap={0}
          h={"152px"}
          py={6}
          px={1}
          as={Link}
          to={"/"}
        >
          <Image
            src="/logo192.png"
            w={"48px"}
            mb={2}
          />

          {isOpen && (
            <Text
              px={5}
              textAlign={"center"}
              noOfLines={2}
              // animation={"fade-in 500ms"}
            >
              <b>Laboratorium Poltekkes Kemenkes </b>Semarang
            </Text>
          )}
        </VStack>

        <Box>
          {adminNav.map((n, i) => {
            if (n.nested) {
              return (
                <Accordion
                  key={i}
                  allowMultiple
                >
                  <AccordionItem border={"none"}>
                    <AccordionButton p={0}>
                      <HStack
                        w={"100%"}
                        className={
                          active.includes(n.name)
                            ? "active adminNavItem"
                            : "adminNavItem"
                        }
                      >
                        <HStack
                          w={"100%"}
                          gap={6}
                        >
                          <Icon
                            as={n.icon}
                            fontSize={24}
                            weight="fill"
                          />
                          {isOpen && (
                            <Text
                            // animation={"fade-in 500ms"}
                            >
                              {" "}
                              {n.name}
                            </Text>
                          )}
                        </HStack>

                        {isOpen && (
                          <Icon
                            as={CaretDown}
                            fontSize={iconSize}
                            // animation={"fade-in 500ms"}
                          />
                        )}
                      </HStack>
                    </AccordionButton>

                    {isOpen && (
                      <AccordionPanel
                        p={0}
                        bg={"var(--divider)"}
                        // animation={"fade-in 500ms"}
                      >
                        <Box>
                          {n.subNav?.map((sn, i) => (
                            <Link
                              to={sn.link}
                              key={i}
                            >
                              <Box
                                className={
                                  active.includes(sn.name)
                                    ? "active adminNavItem"
                                    : "adminNavItem"
                                }
                                pl={"76px !important"}
                              >
                                <Text whiteSpace={"nowrap"}>{sn.name}</Text>
                              </Box>
                            </Link>
                          ))}
                        </Box>
                      </AccordionPanel>
                    )}
                  </AccordionItem>
                </Accordion>
              );
            } else {
              return (
                <HStack
                  key={i}
                  as={Link}
                  to={n.link}
                  gap={6}
                  className={
                    active.includes(n.name)
                      ? "active adminNavItem"
                      : "adminNavItem"
                  }
                >
                  <Icon
                    as={n.icon}
                    fontSize={24}
                    weight="fill"
                  />
                  {isOpen && (
                    <Text
                    // animation={"fade-in 500ms"}
                    >
                      {" "}
                      {n.name}
                    </Text>
                  )}
                </HStack>
              );
            }
          })}
        </Box>
      </Box>
    </>
  );
}
