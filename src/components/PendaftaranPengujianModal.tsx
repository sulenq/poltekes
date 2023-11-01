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
import { checkBoxTextMt } from "../const/sizes";
import RequiredForm from "./RequiredForm";
import * as yup from "yup";
import { useFormik } from "formik";

export default function PendaftaranPengujianModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const initialRef = useRef(null);

  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      namaSertifikatUji: "",
      alamatSertifikatUji: "",
      agreement: false,
    },

    validationSchema: yup.object().shape({
      namaSertifikatUji: yup.string().required("Username harus diisi"),
      alamatSertifikatUji: yup.string().required("Kata Sandi harus diisi"),
      agreement: yup
        .boolean()
        .oneOf([true], "Anda harus menyetujui Syarat dan Ketentuan")
        .required("Anda harus menyetujui Syarat dan Ketentuan"),
    }),

    onSubmit: (values, { resetForm }) => {
      //TODO post daftar pengujian online

      console.log(values);
    },
  });

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

          <ModalHeader lineHeight={1.2}>
            Form Pendaftaran Pengujian Online
          </ModalHeader>

          <ModalBody>
            <form>
              <FormControl mb={4}>
                <FormLabel>
                  Nama Sertifikat Hasil Uji
                  <RequiredForm />
                </FormLabel>
                <Input
                  ref={initialRef}
                  name="namaSertifikatUji"
                  placeholder="Masukan nama anda"
                  onChange={formik.handleChange}
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>
                  Alamat Sertifikat Hasil Uji
                  <RequiredForm />
                </FormLabel>
                <Textarea
                  name="alamatSertifikatUji"
                  placeholder="Masukan alamat anda"
                  onChange={formik.handleChange}
                />
              </FormControl>

              <Checkbox
                alignItems={"flex-start"}
                colorScheme="ap"
                gap={1}
                isChecked={formik.values.agreement}
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
                  >
                    syarat dan ketentuan
                  </ChakraLink>{" "}
                  yang berlaku di LPPT POLTEKKES Kemenkes Semarang
                </Text>
              </Checkbox>
            </form>
          </ModalBody>

          <ModalFooter>
            {/* TODO submit form and continue */}

            <Button
              colorScheme="ap"
              className="clicky"
              as={Link}
              to={"/customer/pendaftaran-pengujian"}
              isDisabled={!formik.values.agreement}
            >
              Simpan & Lanjutkan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
