import {
  Button,
  FormControl,
  FormErrorMessage,
  Image,
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
import React, { useState } from "react";
import useBackOnClose from "../utils/useBackOnClose";
import * as yup from "yup";
import { useFormik } from "formik";

type Props = {
  noreg: number;
};

export default function VerifikasiPembayaranModal({ noreg }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  //   TODO get bukti pembayaran
  const [data] = useState("/images/buktiPembayaranExample.png");

  const tolakColor = useColorModeValue("red.500", "red.200");

  const formik = useFormik({
    initialValues: {
      verifikasi: "",
      keterangan: "",
    },

    validationSchema: yup.object().shape({
      verifikasi: yup
        .string()
        .required("Pilih aksi untuk verifikasi pembayaran"),
    }),

    onSubmit: (values, { resetForm }) => {
      // TODO post verifikasi pembayaran
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
        Verifikasi Pembayaran
      </Button>

      <Modal isOpen={isOpen} onClose={handleOnClose} size={"xl"}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Verifikasi Pembayaran</ModalHeader>

          <ModalBody>
            <Image
              src={data}
              onClick={() => {
                window.open(data, "_blank");
              }}
              cursor={"pointer"}
              mb={4}
              borderRadius={8}
            />

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
                      value={"Pembayaran Diverifikasi"}
                      color={"p.500"}
                    >
                      <Text color={"p.500"}>Verifikasi</Text>
                    </Radio>

                    <Radio
                      size={"lg"}
                      colorScheme="ap"
                      value={"Verifikasi Ditolak"}
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
                    formik.values.verifikasi === "Verifikasi Ditolak"
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
