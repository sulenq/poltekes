import {
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ArrowDown, ArrowUp, CaretDown } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";
import useSortCustomer from "../globalState/useSortCustomer";

export default function SortCustomer() {
  const { setSortBy, setSortOrder } = useSortCustomer();

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
      // minW={"140px"}
      >
        <MenuGroup title="Nama Lengkap">
          <MenuItem
            onClick={() => {
              setSortBy("namaLengkap");
              setSortOrder("asc");
            }}
          >
            <HStack className="sortItem">
              <Text>A-Z</Text>
              <Icon
                as={ArrowUp}
                fontSize={iconSize}
              />
            </HStack>
          </MenuItem>

          <MenuItem
            onClick={() => {
              setSortBy("namaLengkap");
              setSortOrder("desc");
            }}
          >
            <HStack className="sortItem">
              <Text>Z-A</Text>
              <Icon
                as={ArrowDown}
                fontSize={iconSize}
              />
            </HStack>
          </MenuItem>
        </MenuGroup>

        <MenuDivider />

        <MenuGroup title="Instansi/Perusahaan">
          <MenuItem
            onClick={() => {
              setSortBy("instansi");
              setSortOrder("asc");
            }}
          >
            <HStack className="sortItem">
              <Text>A-Z</Text>
              <Icon
                as={ArrowUp}
                fontSize={iconSize}
              />
            </HStack>
          </MenuItem>

          <MenuItem
            onClick={() => {
              setSortBy("instansi");
              setSortOrder("desc");
            }}
          >
            <HStack className="sortItem">
              <Text>Z-A</Text>
              <Icon
                as={ArrowDown}
                fontSize={iconSize}
              />
            </HStack>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
