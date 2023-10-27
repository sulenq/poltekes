import { VStack } from "@chakra-ui/react";
import React from "react";

export default function Container(props: any) {
  const children: JSX.Element = props.children;

  return (
    <VStack
      {...props}
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
