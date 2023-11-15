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
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useRef } from "react";
import * as yup from "yup";
import PasswordInput from "./PasswordInput";
import { useNavigate } from "react-router-dom";

export default function SigninModal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const modalContentRef = useRef(null);
  const navigate = useNavigate();

  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      username: "",
      kataSandi: "",
      isAdmin: false,
    },

    validationSchema: yup.object().shape({
      username: yup.string().required("Username harus diisi"),
      kataSandi: yup.string().required("Kata Sandi harus diisi"),
    }),

    onSubmit: (values, { resetForm }) => {
      //TODO post signin

      console.log(values);
      if (values.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/customer");
      }
    },
  });

  return (
    <>
      <Button
        id={"signinButton"}
        colorScheme="ap"
        className="clicky"
        onClick={onOpen}
      >
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
            <HStack
              justify={"space-between"}
              align={"flex-start"}
            >
              <HStack>
                <Image
                  src="/logo192.png"
                  w={"100%"}
                  maxW={"48px"}
                />

                <Text
                  fontSize={[30, null, 32]}
                  fontWeight={700}
                >
                  Masuk
                </Text>
              </HStack>
            </HStack>
          </ModalHeader>

          <ModalBody>
            <form
              id="signinForm"
              onSubmit={formik.handleSubmit}
            >
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
                mb={2}
              >
                <FormLabel>Kata Sandi</FormLabel>
                <PasswordInput
                  formik={formik}
                  name={"kataSandi"}
                />
                <FormErrorMessage>{formik.errors.kataSandi}</FormErrorMessage>
              </FormControl>

              <Text mb={4}>
                Lupa kata sandi?{" "}
                <ChakraLink
                  href={"/reset-password"}
                  isExternal
                  color={"p.500"}
                  fontWeight={600}
                >
                  Reset
                </ChakraLink>
              </Text>

              <HStack>
                <Text fontWeight={500}>Pegawai</Text>
                <Switch
                  colorScheme="ap"
                  onChange={(e) => {
                    formik.setFieldValue("isAdmin", e.target.checked);
                  }}
                />
              </HStack>
            </form>
          </ModalBody>

          <ModalFooter>
            <VStack
              w={"100%"}
              gap={0}
            >
              <Button
                w={"100%"}
                colorScheme="ap"
                className="lg-clicky"
                mb={4}
                type="submit"
                form="signinForm"
              >
                Masuk
              </Button>

              <HStack
                justify={"center"}
                gap={1}
              >
                <Text>Belum Daftar?</Text>
                <Text
                  fontWeight={500}
                  color={"p.500"}
                  cursor={"pointer"}
                  onClick={() => {
                    onClose();
                    const signupButton = document.querySelector(
                      "#signupButton",
                    ) as HTMLButtonElement;
                    if (signupButton) {
                      signupButton.click();
                    }
                  }}
                >
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
