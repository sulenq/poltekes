import {
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ArrowDown, ArrowUp, CaretDown } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";
import useSortTransaksi from "../globalState/useSortTransaksi";

export default function SortTransaksi() {
  const { sortBy, sortOrder, setSortOrder } = useSortTransaksi();

  return (
    <Menu>
      <MenuButton
        as={Button}
        flexShrink={0}
        variant={"outline"}
        colorScheme="ap"
        pr={"12px"}
        rightIcon={<Icon as={CaretDown} fontSize={iconSize} />}
      >
        Urutkan
      </MenuButton>

      <MenuList
      // minW={"140px"}
      >
        <MenuGroup title="Tanggal Order">
          <MenuItem
            onClick={() => {
              setSortOrder("asc");
            }}
          >
            <HStack
              className="sortItem"
              color={
                sortBy === "tanggalOrder" && sortOrder === "asc" ? "p.500" : ""
              }
            >
              <Text>Terdahulu-Terbaru</Text>
              <Icon as={ArrowUp} fontSize={iconSize} />
            </HStack>
          </MenuItem>

          <MenuItem
            onClick={() => {
              setSortOrder("desc");
            }}
          >
            <HStack
              className="sortItem"
              color={
                sortBy === "tanggalOrder" && sortOrder === "desc" ? "p.500" : ""
              }
            >
              <Text>Terbaru-Terdahulu</Text>
              <Icon as={ArrowDown} fontSize={iconSize} />
            </HStack>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
