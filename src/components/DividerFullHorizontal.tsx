import { Box } from "@chakra-ui/react";
import React from "react";

export default function DividerFullHorizontal(props: any) {
  return (
    <Box
      {...props}
      w={"100%"}
      h={"1px"}
      borderBottom={"1px solid var(--divider3)"}
    />
  );
}
