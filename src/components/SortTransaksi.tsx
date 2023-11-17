import {
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ArrowDown, ArrowUp, CaretDown } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";

export default function SortTransaksi() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        flexShrink={0}
        variant={"outline"}
        colorScheme="ap"
        pr={"12px"}
        rightIcon={
          <Icon
            as={CaretDown}
            fontSize={iconSize}
          />
        }
      >
        Urutkan
      </MenuButton>

      <MenuList
        minW={"140px"}
        // border={"1px solid var(--p500)"}
      >
        <MenuItem>
          <HStack className="sortItem">
            <Text>Tanggal Order Terdahulu</Text>
            <Icon
              as={ArrowUp}
              fontSize={iconSize}
            />
          </HStack>
        </MenuItem>
        <MenuItem>
          <HStack className="sortItem">
            <Text>Tanggal Order Terbaru</Text>
            <Icon
              as={ArrowDown}
              fontSize={iconSize}
            />
          </HStack>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
