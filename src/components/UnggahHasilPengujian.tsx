import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
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
import { useFormik } from "formik";
import * as yup from "yup";
import FilesInput from "./FilesInput";
import RequiredForm from "./RequiredForm";

type Props = {
  noreg: number;
};

export default function UnggahHasilPengujian({ noreg }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  const formik = useFormik({
    initialValues: {
      hasilPengujian: "",
    },

    validationSchema: yup.object().shape({
      hasilPengujian: yup
        .array()
        .required("Hasil Pengujian harus diunggah")
        .test("fileType", "Hanya file PDF yang diperbolehkan", (value) =>
          value.every((file) => file.type === "application/pdf")
        )
        .test("fileSize", "Ukuran maksimal file adalah 1 MB", (value) =>
          value.every((file) => file.size <= 1000000)
        ),
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
        id={`Dalam Pengujian - ${noreg}`}
      >
        Unggah Hasil Pengujian
      </Button>

      <Modal isOpen={isOpen} onClose={handleOnClose} size={"xl"}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Masukkan Hasil Pengujian</ModalHeader>

          <ModalBody>
            <Alert
              className="alert"
              variant={"left-accent"}
              colorScheme="orange"
              mb={6}
            >
              <Box>
                <AlertTitle fontSize={[18, null, 20]} color={"orange"}>
                  PERHATIAN!!
                </AlertTitle>
                <AlertDescription>
                  Format hasil pengujian berupa <b>.pdf maks. 1 MB</b>
                </AlertDescription>
              </Box>
            </Alert>

            <form id="unggahHasilPengujianForm" onSubmit={formik.handleSubmit}>
              <FormControl
                isInvalid={formik.errors.hasilPengujian ? true : false}
              >
                <FormLabel>
                  Unggah Hasil Pengujian
                  <RequiredForm />
                </FormLabel>
                <FilesInput
                  name="hasilPengujian"
                  formik={formik}
                  accept=".pdf"
                />
                <FormErrorMessage>
                  {formik.errors.hasilPengujian}
                </FormErrorMessage>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              className="lg-clicky"
              colorScheme="ap"
              type="submit"
              form="unggahHasilPengujianForm"
            >
              Simpan & Kirim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
