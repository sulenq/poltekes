import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "./PasswordInput";

export default function SigninModal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const modalContentRef = useRef(null);

  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });

  return (
    <>
      <Button colorScheme="ap" className="clicky" onClick={onOpen}>
        Masuk
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={modalContentRef}
      >
        <ModalOverlay />

        <ModalContent ref={modalContentRef}>
          <ModalCloseButton />

          <ModalHeader>
            <HStack justify={"space-between"} align={"flex-start"}>
              <HStack>
                <Image src="/logo192.png" w={"100%"} maxW={"48px"} />

                <Text fontSize={[30, null, 32]} fontWeight={700}>
                  Masuk
                </Text>
              </HStack>
            </HStack>
          </ModalHeader>

          <ModalBody>
            <form id="signinForm" onSubmit={formik.handleSubmit}>
              <FormControl
                isInvalid={formik.errors.username ? true : false}
                mb={4}
              >
                <FormLabel>Username</FormLabel>
                <Input
                  name="username"
                  placeholder="Masukkan username"
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.password ? true : false}
                mb={5}
              >
                <FormLabel>Password</FormLabel>
                <PasswordInput formik={formik} />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>

              <HStack mb={4}>
                <Text fontWeight={500}>Pegawai</Text>
                <Switch colorScheme="p" />
              </HStack>

              <Button
                w={"100%"}
                colorScheme="ap"
                className="lg-clicky"
                mb={4}
                as={Link}
                to={"/customer"}
              >
                Masuk
              </Button>
            </form>

            <HStack justify={"center"} gap={1}>
              <Text>Belum Daftar?</Text>
              <Text as={Link} to={"/daftar"} fontWeight={500} color={"p.500"}>
                Daftar
              </Text>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
