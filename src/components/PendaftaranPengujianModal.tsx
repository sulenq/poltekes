import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Link as ChakraLink,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useBackOnClose from "../utils/useBackOnClose";

export default function PendaftaranPengujianModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  useBackOnClose(isOpen, onClose);

  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  return (
    <>
      <Button colorScheme="ap" className="lg-clicky" mb={6} onClick={onOpen}>
        Pendaftaran Pengujian Online
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={handleOnClose}
        initialFocusRef={initialRef}
        size={"xl"}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader pr={"50px !important"} lineHeight={1.2}>
            Form Pendaftaran Pengujian Online
          </ModalHeader>

          <ModalBody>
            <form>
              <FormControl mb={4}>
                <FormLabel>Nama Sertifikat Hasil Uji</FormLabel>
                <Input ref={initialRef} placeholder="Masukan nama anda" />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Alamat Sertifikat Hasil Uji</FormLabel>
                <Textarea placeholder="Masukan alamat anda" />
              </FormControl>

              <Checkbox alignItems={"flex-start"} colorScheme="ap" gap={1}>
                <Text mt={"-5px"} fontSize={[12, null, 14]}>
                  Saya dengan ini menyatakan setuju dengan{" "}
                  <ChakraLink color="p.500" href="#">
                    syarat dan ketentuan
                  </ChakraLink>{" "}
                  yang berlaku di LPPT POLTEKKES Kemenkes Semarang
                </Text>
              </Checkbox>
            </form>
          </ModalBody>

          <ModalFooter pt={"0 !important"}>
            <Button
              colorScheme="ap"
              className="clicky"
              as={Link}
              to={"/customer/pendaftaran-pengujian"}
            >
              Simpan & Lanjutkan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
