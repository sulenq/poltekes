import { Icon, IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { DotsThreeVertical } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";
import AdminKelolaProdukUpdateModal from "./AdminKelolaProdukUpdateModal";
import DeleteProdukModal from "./DeleteProdukModal";

type Props = {
  id: string;
};

export default function AdminKelolaProdukAksiMenu({ id }: Props) {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="button aksi"
        icon={
          <Icon
            as={DotsThreeVertical}
            fontSize={iconSize}
            weight="bold"
          />
        }
        borderRadius={"full"}
        variant={"ghost"}
        className="btn lg-clicky"
      />

      <MenuList minW={"140px"}>
        <AdminKelolaProdukUpdateModal id={id} />

        <DeleteProdukModal id={id} />
      </MenuList>
    </Menu>
  );
}
