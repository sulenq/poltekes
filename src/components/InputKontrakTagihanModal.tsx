import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
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
import FilesInput from "./FilesInput";
import { useFormik } from "formik";
import * as yup from "yup";
import RequiredForm from "./RequiredForm";
import useFormatNumber from "../utils/useFormatNumber";
import useReverseFormatNumber from "../utils/useReverseFormatNumber";

type Props = {
  noreg: number;
};

export default function InputKontrakTagihanModal({ noreg }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      fileKontrak: "",
      tagihanTambahan: null,
    },

    validationSchema: yup.object().shape({
      fileKontrak: yup
        .array()
        .required("File kontrak harus diunggah")
        .test(
          "fileType",
          "Hanya file PDF dan DOC (ms word) yang diperbolehkan",
          (value) =>
            value.every(
              (file) =>
                file.type === "application/pdf" ||
                file.type === "application/msword"
            )
        )
        .test("fileSize", "Ukuran maksimal file adalah 1 MB", (value) =>
          value.every((file) => file.size <= 1000000)
        ),
      tagihanTambahan: yup.number().required("Tagihan Tambahan harus diisi"),
    }),

    onSubmit: (values, { resetForm }) => {
      // TODO post file kontrak dan tagihan
      console.log(values);
    },
  });

  const fn = useFormatNumber;
  const rfn = useReverseFormatNumber;
  const tagihanTambahanHelperTextColor = useColorModeValue(
    "red.500",
    "red.300"
  );

  return (
    <>
      <Button
        w={"100%"}
        colorScheme={"ap"}
        className="lg-clicky"
        onClick={onOpen}
      >
        Input Kontrak & Tagihan
      </Button>

      <Modal isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Masukkan File Kontrak & Tagihan</ModalHeader>

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
                  Format berkas kontrak berupa{" "}
                  <b>.pdf, .doc, .docx maks. 1 MB</b>
                </AlertDescription>
              </Box>
            </Alert>

            <form id="kontrakTagihanForm" onSubmit={formik.handleSubmit}>
              <FormControl
                mb={4}
                isInvalid={formik.errors.fileKontrak ? true : false}
              >
                <FormLabel>
                  Unggah File Kontrak <RequiredForm />
                </FormLabel>
                <FilesInput name="fileKontrak" formik={formik} />
                <FormErrorMessage>{formik.errors.fileKontrak}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.tagihanTambahan ? true : false}
              >
                <FormLabel>Tagihan Tambahan</FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    <Text>Rp</Text>
                  </InputLeftElement>
                  <Input
                    name="tagihanTambahan"
                    placeholder="Masukkan tagihan tambahan"
                    onChange={(e) => {
                      formik.setFieldValue(
                        "tagihanTambahan",
                        rfn(e.target.value)
                      );
                    }}
                    value={
                      formik.values.tagihanTambahan
                        ? fn(formik.values.tagihanTambahan)
                        : formik.values.tagihanTambahan === 0
                        ? "0"
                        : ""
                    }
                  />
                </InputGroup>
                <FormHelperText color={tagihanTambahanHelperTextColor}>
                  *jika tidak ada tagihan tambahan, masukan 0
                </FormHelperText>
                <FormErrorMessage>
                  {formik.errors.tagihanTambahan}
                </FormErrorMessage>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              form="kontrakTagihanForm"
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
