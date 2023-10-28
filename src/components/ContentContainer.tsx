import { VStack } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: JSX.Element;
};

export default function ContentContainer({ children }: Props) {
  return (
    <VStack gap={0} flex={1} align={"flex-start"}>
      {children}
    </VStack>
  );
}
