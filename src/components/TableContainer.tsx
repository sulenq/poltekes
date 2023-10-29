import { Box } from "@chakra-ui/react";
import React from "react";

type Props = { children: JSX.Element };

export default function TableContainer({ children }: Props) {
  return (
    <Box
      overflow={"auto"}
      w={"100%"}
      maxH={"calc(80vh - 80px)"}
      border={"1px solid var(--divider3)"}
      borderRadius={4}
      className="scrollX"
      // maxW={"1024px"}
      // mx={"auto"}
    >
      {children}
    </Box>
  );
}
