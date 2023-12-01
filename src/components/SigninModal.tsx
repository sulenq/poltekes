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
import * as yup from "yup";
import React, { useRef, useState } from "react";
import PasswordInput from "./PasswordInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setCookie } from "typescript-cookie";
import useBackOnClose from "../utils/useBackOnClose";

export default function SigninModal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  const modalContentRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      username: "",
      password: "",
      isAdmin: false,
    },

    validationSchema: yup.object().shape({
      username: yup.string().required("Username harus diisi"),
      password: yup.string().required("Kata Sandi harus diisi"),
    }),

    onSubmit: (values, { resetForm }) => {
      const data = {
        username: values.username,
        password: values.password,
      };

      const options = {
        method: "post",
        baseUrl: process.env.REACT_APP_BASE_URL,
        url: "https://development.avanafish.com/api/login",
        data: data,
      };

      async function signin() {
        setLoading(true);

        try {
          const response = await axios.request(options);
          setCookie("userData", JSON.stringify(response.data.data));

          if (values.isAdmin) {
            navigate("/admin");
          } else {
            navigate("/customer");
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      signin();

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
        onClose={handleOnClose}
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
                isInvalid={formik.errors.password ? true : false}
                mb={2}
              >
                <FormLabel>Kata Sandi</FormLabel>
                <PasswordInput formik={formik} name={"password"} />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>

              <HStack mb={4}>
                <Text fontWeight={500}>Pegawai</Text>
                <Switch
                  colorScheme="ap"
                  onChange={(e) => {
                    formik.setFieldValue("isAdmin", e.target.checked);
                  }}
                />
              </HStack>

              <Text textAlign={"center"} mb={-1}>
                Lupa kata sandi?{" "}
                <span
                  style={{
                    color: "var(--p500)",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleOnClose();
                    const signupButton = document.querySelector(
                      "#resetPassword"
                    ) as HTMLButtonElement;
                    if (signupButton) {
                      setTimeout(() => {
                        signupButton.click();
                      }, 50);
                    }
                  }}
                >
                  Reset
                </span>
              </Text>
            </form>
          </ModalBody>

          <ModalFooter>
            <VStack w={"100%"} gap={0}>
              <Button
                type="submit"
                form="signinForm"
                w={"100%"}
                colorScheme="ap"
                className="lg-clicky"
                mb={4}
                isLoading={loading}
              >
                Masuk
              </Button>

              <HStack justify={"center"} gap={1}>
                <Text>Belum Daftar?</Text>
                <Text
                  fontWeight={600}
                  color={"p.500"}
                  cursor={"pointer"}
                  onClick={() => {
                    handleOnClose();
                    const signupButton = document.querySelector(
                      "#signupButton"
                    ) as HTMLButtonElement;
                    if (signupButton) {
                      setTimeout(() => {
                        signupButton.click();
                      }, 50);
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
