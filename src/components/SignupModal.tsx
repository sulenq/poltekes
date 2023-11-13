import {
  Box,
  Button,
  Checkbox,
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
  Text,
  Textarea,
  VStack,
  Wrap,
  useDisclosure,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useRef } from "react";
import PasswordInput from "./PasswordInput";
import * as yup from "yup";
import { checkBoxTextMt } from "../const/sizes";
import RequiredForm from "./RequiredForm";

export default function SignupModal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const modalContentRef = useRef(null);

  //? Dummy
  const kateogri = [
    "Dosen",
    "Mahasiswa",
    "Instansi Pemerintah",
    "Perusahaan",
    "Umum",
  ];

  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      username: "",
      kataSandi: "",
      ulangKataSandi: "",
      namaLengkap: "",
      email: "",
      telepon: "",
      institusi: "",
      alamat: "",
      agreement: false,
    },

    validationSchema: yup.object().shape({
      username: yup.string().required("Username harus diisi"),
      kataSandi: yup.string().required("Kata Sandi harus diisi"),
      ulangKataSandi: yup
        .string()
        .required("Ulang Kata Sandi harus diisi")
        .oneOf([yup.ref("kataSandi")], "Kata sandi tidak cocok"),
      kategori: yup.string().required("Kategori harus diisi"),
      namaLengkap: yup.string().required("Nama Lengkap harus diisi"),
      email: yup.string().required("Email harus diisi"),
      telepon: yup.string().required("Telepon harus diisi"),
      institusi: yup.string(),
      alamat: yup.string().required("Alamat harus diisi"),
      agreement: yup
        .boolean()
        .oneOf([true], "Anda harus menyetujui Syarat dan Ketentuan")
        .required("Anda harus menyetujui Syarat dan Ketentuan"),
    }),

    onSubmit: (values, { resetForm }) => {
      //TODO post signup

      console.log(values);
    },
  });

  return (
    <>
      <Button
        variant={"ghost"}
        colorScheme="ap"
        className="clicky"
        onClick={onOpen}
        id="signupButton"
      >
        Daftar
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={modalContentRef}
        scrollBehavior="inside"
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
                  Daftar
                </Text>
              </HStack>
            </HStack>
          </ModalHeader>

          <ModalBody>
            <form id="signupForm" onSubmit={formik.handleSubmit}>
              <FormControl
                isInvalid={formik.errors.username ? true : false}
                mb={4}
              >
                <FormLabel>
                  Username
                  <RequiredForm />
                </FormLabel>
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
                <FormLabel>
                  Kata Sandi
                  <RequiredForm />
                </FormLabel>
                <PasswordInput formik={formik} name={"kataSandi"} />
                <FormErrorMessage>{formik.errors.kataSandi}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.ulangKataSandi ? true : false}
                mb={5}
              >
                <FormLabel>
                  Ulang Kata sandi
                  <RequiredForm />
                </FormLabel>
                <PasswordInput
                  formik={formik}
                  name={"ulangKataSandi"}
                  placeholder={"Masukkan ulang kata sandi"}
                />
                <FormErrorMessage>
                  {formik.errors.ulangKataSandi}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.namaLengkap ? true : false}
                mb={4}
              >
                <FormLabel>
                  Nama Lengkap
                  <RequiredForm />
                </FormLabel>
                <Input
                  name="namaLengkap"
                  placeholder="Masukkan nama lengkap"
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.namaLengkap}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.email ? true : false}
                mb={4}
              >
                <FormLabel>
                  Email
                  <RequiredForm />
                </FormLabel>
                <Input
                  name="email"
                  placeholder="Masukkan email"
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.telepon ? true : false}
                mb={4}
              >
                <FormLabel>
                  Nomor ponsel
                  <RequiredForm />
                </FormLabel>
                <Input
                  name="telepon"
                  placeholder="Masukkan nomor ponsel"
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.telepon}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.institusi ? true : false}
                mb={4}
              >
                <FormLabel>Institusi/Perusahaan</FormLabel>
                <Input
                  name="institusi"
                  placeholder="Masukkan institusi"
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.institusi}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.alamat ? true : false}
                mb={4}
              >
                <FormLabel>
                  Alamat
                  <RequiredForm />
                </FormLabel>
                <Textarea
                  name="alamat"
                  placeholder="Masukan alamat tinggal"
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.alamat}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.agreement ? true : false}>
                <Checkbox
                  alignItems={"flex-start"}
                  colorScheme="ap"
                  gap={1}
                  isInvalid={formik.errors.agreement ? true : false}
                  onChange={() => {
                    formik.setFieldValue("agreement", !formik.values.agreement);
                  }}
                >
                  <Text mt={checkBoxTextMt} fontSize={[12, null, 14]}>
                    Saya dengan ini menyatakan setuju dengan{" "}
                    <ChakraLink
                      color="p.500"
                      href="/syarat-dan-ketentuan"
                      fontSize={["12px !important", null, "14px !important"]}
                      isExternal
                      fontWeight={600}
                    >
                      syarat dan ketentuan
                    </ChakraLink>{" "}
                    yang berlaku di LPPT POLTEKKES Kemenkes Semarang
                  </Text>
                </Checkbox>
                <FormErrorMessage>{formik.errors.agreement}</FormErrorMessage>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <VStack w={"100%"} gap={0}>
              <Button
                w={"100%"}
                type="submit"
                colorScheme="ap"
                className="lg-clicky"
                mb={4}
                form="signupForm"
              >
                Daftar
              </Button>

              <HStack justify={"center"} gap={1}>
                <Text>Sudah terdaftar?</Text>
                <Text
                  fontWeight={500}
                  color={"p.500"}
                  cursor={"pointer"}
                  onClick={() => {
                    onClose();
                    const signupButton = document.querySelector(
                      "#signinButton",
                    ) as HTMLButtonElement;
                    if (signupButton) {
                      signupButton.click();
                    }
                  }}
                >
                  Masuk
                </Text>
              </HStack>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
