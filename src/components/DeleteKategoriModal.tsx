import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Trash } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";
import useBackOnClose from "../utils/useBackOnClose";

type Props = {
  id: number;
};

export default function DeleteKategoriModal({ id }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  return (
    <>
      <Button
        colorScheme="red"
        className="lg-clicky"
        leftIcon={
          <Icon
            as={Trash}
            fontSize={iconSize}
          />
        }
        pl={3}
        onClick={onOpen}
      >
        Hapus
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={handleOnClose}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Hapus Kategori</ModalHeader>

          <ModalBody>
            <Text>Anda yakin dengan menghapus Kategori ini?</Text>
          </ModalBody>

          <ModalFooter gap={2}>
            <Button
              type="submit"
              form="tambahKategoriForm"
              colorScheme="red"
              variant={"outline"}
              className="lg-clicky"
              onClick={handleOnClose}
            >
              Tidak
            </Button>

            <Button
              type="submit"
              form="tambahKategoriForm"
              colorScheme="red"
              className="lg-clicky"
            >
              Yakin
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
