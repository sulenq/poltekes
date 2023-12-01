import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import useBackOnClose from "../utils/useBackOnClose";
import { useFormik } from "formik";
import * as yup from "yup";

export default function ResetPasswordModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const handleOnClose = () => {
    onClose();
    window.history.back();
  };
  const emailTextHelperColor = useColorModeValue("red.500", "red.200");

  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      email: "",
    },

    validationSchema: yup.object().shape({
      email: yup.string().required("Email harus diisi"),
    }),

    onSubmit: (values, { resetForm }) => {
      // TODO post reset password
      console.log(values);
    },
  });

  return (
    <>
      <span
        id="resetPassword"
        style={{
          color: "var(--p500)",
          fontWeight: 600,
          cursor: "pointer",
          display: "none",
        }}
        onClick={onOpen}
      >
        Reset
      </span>

      <Modal isOpen={isOpen} onClose={handleOnClose} size={"lg"}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>
            <HStack justify={"space-between"} align={"flex-start"}>
              <HStack>
                <Image src="/logo192.png" w={"100%"} maxW={"48px"} />

                <Text fontSize={[30, null, 32]} fontWeight={700}>
                  Lupa Kata Sandi
                </Text>
              </HStack>
            </HStack>
          </ModalHeader>

          <ModalBody>
            <form id="lupaKataSandiForm" onSubmit={formik.handleSubmit}>
              <FormControl isInvalid={formik.errors.email ? true : false}>
                <FormLabel>Email</FormLabel>
                <Input name="email" placeholder="Masukkan email" />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                <FormHelperText color={emailTextHelperColor}>
                  *tautan reset kata sandi akan dikirimkan melalui email
                </FormHelperText>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              form="lupaKataSandiForm"
              w={"100%"}
              colorScheme="ap"
              className="lg-clicky"
            >
              Kirim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
