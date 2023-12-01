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
import useAdminDashboardsPeriodicFilter from "../globalState/useAdminDashboardsPeriodicFilter";

export default function AdminDashboardsPeriodicFilter() {
  const { periode, setPeriode } = useAdminDashboardsPeriodicFilter();

  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="ap"
        w={"140px"}
        rightIcon={<Icon as={CaretDown} fontSize={iconSize} />}
      >
        {`${periode} ini`}
      </MenuButton>
      <MenuList
        minW={"140px"}
        // border={"1px solid var(--p500)"}
      >
        <MenuItem
          onClick={() => {
            setPeriode("Minggu");
          }}
        >
          Minggu Ini
        </MenuItem>

        <MenuItem
          onClick={() => {
            setPeriode("Bulan");
          }}
        >
          Bulan Ini
        </MenuItem>

        <MenuItem
          onClick={() => {
            setPeriode("Tahun");
          }}
        >
          Tahun Ini
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
