import { Button, Icon } from "@chakra-ui/react";
import { Plus } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";

export default function TambahParameterModal() {
  return (
    <>
      <Button
        leftIcon={<Icon as={Plus} fontSize={iconSize} weight="bold" />}
        variant={"outline"}
        colorScheme="ap"
        className="lg-clicky"
        pl={"12px"}
      >
        Tambah Parameter
      </Button>
    </>
  );
}
