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
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import PasswordInput from "./PasswordInput";

export default function SigninModal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const modalContentRef = useRef(null);

  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      username: "",
      kataSandi: "",
    },

    validationSchema: yup.object().shape({
      username: yup.string().required("Username harus diisi"),
      kataSandi: yup.string().required("Kata Sandi harus diisi"),
    }),

    onSubmit: (values, { resetForm }) => {
      //TODO post signin
      
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
        size={"lg"}
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
                isInvalid={formik.errors.kataSandi ? true : false}
                mb={5}
              >
                <FormLabel>Kata Sandi</FormLabel>
                <PasswordInput formik={formik} />
                <FormErrorMessage>{formik.errors.kataSandi}</FormErrorMessage>
              </FormControl>

              <HStack>
                <Text fontWeight={500}>Pegawai</Text>
                <Switch colorScheme="p" />
              </HStack>
            </form>
          </ModalBody>

          <ModalFooter>
            <VStack w={"100%"} gap={0}>
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

              <HStack justify={"center"} gap={1}>
                <Text>Belum Daftar?</Text>
                <Text as={Link} to={"/daftar"} fontWeight={500} color={"p.500"}>
                  Daftar
                </Text>
              </HStack>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
