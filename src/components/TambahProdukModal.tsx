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
  Select,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { iconSize } from "../const/sizes";
import { Plus } from "@phosphor-icons/react";
import useBackOnClose from "../utils/useBackOnClose";
import { useFormik } from "formik";
import * as yup from "yup";

export default function TambahProdukModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      namaProduk: "",
      kategoriProduk: "",
      harga: "",
      deskripsi: "",
    },

    validationSchema: yup.object().shape({
      namaProduk: yup.string().required("Nama Produk harus diisi"),
      kategoriProduk: yup.string().required("Kategori Produk harus diisi"),
      harga: yup.string().required("Harga Produk harus diisi"),
      deskripsi: yup.string().required("Deskripsi Produk harus diisi"),
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
        leftIcon={<Icon as={Plus} fontSize={iconSize} />}
        pl={3}
        pr={[1, 4]}
        colorScheme="ap"
        className="lg-clicky"
        onClick={onOpen}
      >
        <Text display={["none", "block"]}>Tambah Produk</Text>
      </Button>

      <Modal isOpen={isOpen} onClose={handleOnClose} size={"xl"}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Tambah Produk</ModalHeader>

          <ModalBody>
            <form id="tambahProdukForm" onSubmit={formik.handleSubmit}>
              <FormControl
                mb={4}
                isInvalid={formik.errors.namaProduk ? true : false}
              >
                <FormLabel>Nama Produk</FormLabel>
                <Input
                  name="namaProduk"
                  placeholder="Masukkan nama produk"
                  onChange={formik.handleChange}
                  value={formik.values.namaProduk}
                />
                <FormErrorMessage>{formik.errors.namaProduk}</FormErrorMessage>
              </FormControl>

              <FormControl
                mb={4}
                isInvalid={formik.errors.kategoriProduk ? true : false}
              >
                <FormLabel>Kategori Produk</FormLabel>
                <Select
                  name="kategoriProduk"
                  value={formik.values.kategoriProduk}
                >
                  <option>Option 1</option>
                </Select>
                <FormErrorMessage>
                  {formik.errors.kategoriProduk}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                mb={4}
                isInvalid={formik.errors.namaProduk ? true : false}
              >
                <FormLabel>Harga</FormLabel>
                <Input
                  name="harga"
                  placeholder="Masukkan harga produk"
                  onChange={formik.handleChange}
                  value={formik.values.harga}
                />
                <FormErrorMessage>{formik.errors.harga}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.deskripsi ? true : false}>
                <FormLabel>Nama Produk</FormLabel>
                <Textarea
                  name="deskripsi"
                  placeholder="Masukkan deskripsi produk"
                  onChange={formik.handleChange}
                  value={formik.values.deskripsi}
                />
                <FormErrorMessage>{formik.errors.deskripsi}</FormErrorMessage>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              form={"tambahProdukForm"}
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
