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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Plus } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";
import useBackOnClose from "../utils/useBackOnClose";
import { useFormik } from "formik";
import * as yup from "yup";

export default function TambahKategoriModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      namaKategori: "",
    },

    validationSchema: yup.object().shape({
      namaKategori: yup.string().required("Nama Kategori harus diisi"),
    }),

    onSubmit: (values, { resetForm }) => {
      // TODO post new kategori
      console.log(values);
    },
  });

  return (
    <>
      <Button
        flexShrink={0}
        leftIcon={
          <Icon
            as={Plus}
            fontSize={iconSize}
          />
        }
        pl={3}
        pr={[1, 4]}
        colorScheme="ap"
        className="lg-clicky"
        onClick={onOpen}
      >
        <Text display={["none", "block"]}>Tambah Kategori</Text>
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={handleOnClose}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Tambah Kategori</ModalHeader>

          <ModalBody>
            <form
              id="tambahKategoriForm"
              onSubmit={formik.handleSubmit}
            >
              <FormControl
                isInvalid={formik.errors.namaKategori ? true : false}
              >
                <FormLabel>Nama Kategori</FormLabel>
                <Input
                  name="namaKategori"
                  placeholder="Masukkan nama kategori"
                  onChange={formik.handleChange}
                  value={formik.values.namaKategori}
                />
                <FormErrorMessage>
                  {formik.errors.namaKategori}
                </FormErrorMessage>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              form="tambahKategoriForm"
              colorScheme="ap"
              className="lg-clicky"
            >
              Tambahkan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
