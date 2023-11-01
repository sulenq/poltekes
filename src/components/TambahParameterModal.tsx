import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
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
import { Plus } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";
import useBackOnClose from "../utils/useBackOnClose";
import * as yup from "yup";
import { useFormik } from "formik";
import SelectMetodeUji from "./SelectMetodeUji";
import SelectParameterUji from "./SelectParameterUji";

export default function TambahParameterModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);

  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      metodeUji: "",
      parameterUji: "",
      biayaUji: 2000000,
    },

    validationSchema: yup.object().shape({
      metodeUji: yup.string().required("Metode Uji harus diisi"),
      parameterUji: yup.string().required("Parameter Uji harus diisi"),
      biayaUji: yup.number().required("Biaya Uji tidak boleh kosong"),
    }),

    onSubmit: (values, { resetForm }) => {
      //TODO post parameter uji

      console.log(values);
    },
  });

  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  return (
    <>
      <Button
        leftIcon={<Icon as={Plus} fontSize={iconSize} weight="bold" />}
        variant={"outline"}
        colorScheme="ap"
        className="lg-clicky"
        pl={"12px"}
        onClick={onOpen}
      >
        Tambah Parameter
      </Button>

      <Modal isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Masukkan Parameter Uji</ModalHeader>

          <ModalBody>
            <form id="parameterForm" onSubmit={formik.handleSubmit}>
              <FormControl
                isInvalid={formik.errors.metodeUji ? true : false}
                mb={4}
              >
                <FormLabel>Metode Uji</FormLabel>
                <SelectMetodeUji formik={formik} name="metodeUji" />
                <FormErrorMessage>{formik.errors.metodeUji}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.parameterUji ? true : false}
                mb={4}
              >
                <FormLabel>Parameter Uji</FormLabel>
                <SelectParameterUji formik={formik} name="parameterUji" />
                <FormErrorMessage>
                  {formik.errors.parameterUji}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.biayaUji ? true : false}>
                <FormLabel>Biaya Uji</FormLabel>
                <Input readOnly value={`Rp ${formik.values.biayaUji}`} />
                <FormErrorMessage>{formik.errors.biayaUji}</FormErrorMessage>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              form="parameterForm"
              colorScheme="ap"
              className="lg-clicky"
            >
              Simpan & Lanjutkan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
