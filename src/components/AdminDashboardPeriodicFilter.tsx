import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { CaretDown } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";

export default function AdminDashboardPeriodicFilter() {
  const periode = "This Month";

  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="ap"
        rightIcon={<Icon as={CaretDown} fontSize={iconSize} />}
      >
        {periode}
      </MenuButton>
      <MenuList minW={"140px"} border={"1px solid var(--p500)"}>
        <MenuItem>This Week</MenuItem>
        <MenuItem>This Month</MenuItem>
        <MenuItem>This Year</MenuItem>
      </MenuList>
    </Menu>
  );
}
