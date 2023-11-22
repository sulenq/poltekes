import {
  Button,
  FormControl,
  FormErrorMessage,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Text,
  Textarea,
  VStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import useBackOnClose from "../utils/useBackOnClose";

type Props = {
  noreg: number;
};

export default function VerifikasiBerkasModal({ noreg }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  const tolakColor = useColorModeValue("red.500", "red.200");

  const formik = useFormik({
    initialValues: {
      verifikasi: "",
      keterangan: "",
    },

    validationSchema: yup.object().shape({
      verifikasi: yup.string().required("Pilih aksi untuk verifikasi berkas"),
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
        Verifikasi Berkas
      </Button>

      <Modal isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Verifikasi Berkas</ModalHeader>

          <ModalBody>
            <form id="verifikasiBerkasForm" onSubmit={formik.handleSubmit}>
              <FormControl isInvalid={formik.errors.verifikasi ? true : false}>
                <RadioGroup
                  name="verifikasi"
                  onChange={(value) => {
                    formik.setFieldValue("verifikasi", value);
                  }}
                  value={formik.values.verifikasi}
                  mb={4}
                >
                  <VStack align={"flex-start"} gap={4}>
                    <Radio
                      size={"lg"}
                      colorScheme="ap"
                      value={"diverifikasi"}
                      color={"p.500"}
                    >
                      <Text color={"p.500"}>Verifikasi</Text>
                    </Radio>

                    <Radio
                      size={"lg"}
                      colorScheme="ap"
                      value={"verifikasi ditolak"}
                    >
                      <Text color={tolakColor}>Tolak</Text>
                    </Radio>
                  </VStack>
                </RadioGroup>

                <Textarea
                  name="keterangan"
                  onChange={formik.handleChange}
                  placeholder="Masukkan keterangan (opsional)"
                  isDisabled={
                    formik.values.verifikasi === "verifikasi ditolak"
                      ? false
                      : true
                  }
                />

                <FormErrorMessage>{formik.errors.verifikasi}</FormErrorMessage>
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
              Simpan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
