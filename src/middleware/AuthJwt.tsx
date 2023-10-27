import React from "react";
import { Box } from "@chakra-ui/react";

type Props = { children: JSX.Element };

export default function AuthJwt({ children }: Props) {
  //TODO chek is JWT exist

  return <Box>{children}</Box>;
}
