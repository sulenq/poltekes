import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import customerNav from "../const/customerNav";
import { Link } from "react-router-dom";

type Props = {
  children: JSX.Element;
  active: string;
};

export default function CustomerContainer({ children, active }: Props) {
  return (
    <VStack gap={0} minH={"100vh"} align={"stretch"} justify={"space-between"}>
      {children}

      <HStack
        position={"sticky"}
        bottom={0}
        w={"100%"}
        justify={"space-evenly"}
        bg={"white"}
        boxShadow={"0px -1px 2px 1px var(--divider)"}
        p={3}
      >
        {customerNav.map((n, i) => (
          <VStack key={i} gap={1} cursor={"pointer"} as={Link} to={n.link}>
            <Icon
              as={n.icon}
              fontSize={24}
              color={active === n.name ? "p.500" : ""}
              weight={active === n.name ? "duotone" : "regular"}
            />

            <Text fontSize={10} color={active === n.name ? "p.500" : ""}>
              {n.name}
            </Text>
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
}
