import { VStack } from "@chakra-ui/react";
import React from "react";

type Props = { children: JSX.Element };

export default function Container({ children }: Props) {
  return (
    <VStack
      w={"100%"}
      maxW={"1024px"}
      mx={"auto"}
      align={"stretch"}
      px={["18px", null, 6]}
    >
      {children}
    </VStack>
  );
}
