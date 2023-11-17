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
import useSortKelolaProduk from "../globalState/useSortKelolaProduk";

export default function SortKelolaProduk() {
  const { setSortBy, setSortOrder } = useSortKelolaProduk();

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
        <MenuGroup title="Nama Produk">
          <MenuItem>
            <HStack
              className="sortItem"
              onClick={() => {
                setSortBy("namaProduk");
                setSortOrder("asc");
              }}
            >
              <Text>A-Z</Text>
              <Icon
                as={ArrowUp}
                fontSize={iconSize}
              />
            </HStack>
          </MenuItem>
          <MenuItem>
            <HStack
              className="sortItem"
              onClick={() => {
                setSortBy("namaProduk");
                setSortOrder("desc");
              }}
            >
              <Text>Z-A</Text>
              <Icon
                as={ArrowDown}
                fontSize={iconSize}
              />
            </HStack>
          </MenuItem>
        </MenuGroup>

        <MenuDivider />

        <MenuGroup title="Kategori">
          <MenuItem>
            <HStack
              className="sortItem"
              onClick={() => {
                setSortBy("kategori");
                setSortOrder("asc");
              }}
            >
              <Text>A-Z</Text>
              <Icon
                as={ArrowUp}
                fontSize={iconSize}
              />
            </HStack>
          </MenuItem>
          <MenuItem>
            <HStack
              className="sortItem"
              onClick={() => {
                setSortBy("kategori");
                setSortOrder("desc");
              }}
            >
              <Text>Z-A</Text>
              <Icon
                as={ArrowDown}
                fontSize={iconSize}
              />
            </HStack>
          </MenuItem>
        </MenuGroup>

        <MenuDivider />

        <MenuGroup title="Harga">
          <MenuItem>
            <HStack
              className="sortItem"
              onClick={() => {
                setSortBy("harga");
                setSortOrder("asc");
              }}
            >
              <Text>Rendah-Tinggi</Text>
              <Icon
                as={ArrowUp}
                fontSize={iconSize}
              />
            </HStack>
          </MenuItem>
          <MenuItem>
            <HStack
              className="sortItem"
              onClick={() => {
                setSortBy("harga");
                setSortOrder("desc");
              }}
            >
              <Text>Tinggi-Rendah</Text>
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
