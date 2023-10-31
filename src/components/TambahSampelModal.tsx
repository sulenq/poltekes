import {
  Button,
  Icon,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Plus } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";

export default function TambahSampelModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        leftIcon={<Icon as={Plus} fontSize={iconSize} weight="bold" />}
        colorScheme="ap"
        className="lg-clicky"
        mb={4}
        onClick={onOpen}
      >
        Tambah Sampel
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Data Sampel Pengujian</ModalHeader>
        </ModalContent>
      </Modal>
    </>
  );
}
