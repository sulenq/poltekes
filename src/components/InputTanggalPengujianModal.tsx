import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import useBackOnClose from "../utils/useBackOnClose";
import * as yup from "yup";
import { useFormik } from "formik";
import RequiredForm from "./RequiredForm";

type Props = {
  noreg: number;
};

export default function InputTanggalPengujianModal({ noreg }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  const formik = useFormik({
    initialValues: {
      tanggalPengujian: "",
    },

    validationSchema: yup.object().shape({
      tanggalPengujian: yup.string().required("Tanggal Pengujian harus diisi"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });

  return (
    <>
      <Button
        w={"100%"}
        colorScheme="ap"
        className="lg-clicky"
        onClick={onOpen}
      >
        Input Tanggal Pengujian
      </Button>

      <Modal isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Masukkan Tanggal Pengujian</ModalHeader>

          <ModalBody>
            <form id="verifikasiBerkasForm" onSubmit={formik.handleSubmit}>
              <FormControl
                isInvalid={formik.errors.tanggalPengujian ? true : false}
              >
                <FormLabel>
                  Tanggal Pengujian
                  <RequiredForm />
                </FormLabel>
                <Input
                  type="date"
                  name="tangalPengujian"
                  onChange={(e) => {
                    formik.setFieldValue(
                      "tanggalPengujian",
                      new Date(e.target.value)
                    );
                  }}
                />
                <FormErrorMessage>
                  {formik.errors.tanggalPengujian}
                </FormErrorMessage>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              form="verifikasiBerkasForm"
              className="lg-clicky"
              colorScheme="ap"
            >
              Simpan & Kirim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
