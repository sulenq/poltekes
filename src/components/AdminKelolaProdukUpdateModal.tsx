import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Input,
  MenuItem,
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
import useBackOnClose from "../utils/useBackOnClose";
import { useFormik } from "formik";
import * as yup from "yup";
import RequiredForm from "./RequiredForm";
import { PencilSimpleLine } from "@phosphor-icons/react";
import { iconSize } from "../const/sizes";
import useFormatNumber from "../utils/useFormatNumber";
import useReverseFormatNumber from "../utils/useReverseFormatNumber";

type Props = {
  id: string;
};

export default function AdminKelolaProdukUpdateModal({ id }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  //   TODO get data update
  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      id: id,
      namaProduk: "Pengujian X",
      kategori: "Radiologi",
      harga: 1800000,
      deskripsi:
        "Pengujian untuk mengetahui bahwa di tubuh anda ada khodamnya atau tidak",
    },

    validationSchema: yup.object().shape({
      namaProduk: yup.string().required("Nama Produk harus diisi"),
      kategori: yup.string().required("Kategori Produk harus diisi"),
      harga: yup.number().required("Harga harus diisi"),
      deskripsi: yup.string().required("Deskripsi harus diisi"),
    }),

    onSubmit: (values) => {
      // TODO update produk
      console.log(values);
    },
  });

  const fn = useFormatNumber;
  const rfn = useReverseFormatNumber;

  return (
    <>
      <MenuItem onClick={onOpen}>
        <HStack>
          <Icon
            as={PencilSimpleLine}
            fontSize={iconSize}
          />
          <Text>Ubah</Text>
        </HStack>
      </MenuItem>

      <Modal
        isOpen={isOpen}
        onClose={handleOnClose}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Ubah Produk</ModalHeader>

          <ModalBody>
            <form
              id="updateProdukForm"
              onSubmit={formik.handleSubmit}
            >
              <FormControl
                mb={4}
                isInvalid={formik.errors.namaProduk ? true : false}
              >
                <FormLabel>
                  Nama Produk <RequiredForm />
                </FormLabel>
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
                isInvalid={formik.errors.kategori ? true : false}
              >
                <FormLabel>
                  Kategori <RequiredForm />
                </FormLabel>
                <Select
                  name="kategori"
                  onChange={formik.handleChange}
                  value={formik.values.kategori}
                  placeholder="Masukkan kategori produk"
                >
                  <option>Radiologi</option>
                  <option>Sosiologi</option>
                  <option>Geologi</option>
                </Select>
                <FormErrorMessage>{formik.errors.kategori}</FormErrorMessage>
              </FormControl>

              <FormControl
                mb={4}
                isInvalid={formik.errors.harga ? true : false}
              >
                <FormLabel>
                  Harga <RequiredForm />
                </FormLabel>
                <Input
                  name="harga"
                  placeholder="Masukkan harga produk"
                  onChange={(e) => {
                    formik.setFieldValue("harga", rfn(e.target.value));
                  }}
                  value={fn(formik.values.harga)}
                />
                <FormErrorMessage>{formik.errors.harga}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.deskripsi ? true : false}>
                <FormLabel>
                  Deskripsi <RequiredForm />
                </FormLabel>
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
              form="updateProdukForm"
              colorScheme="ap"
              className="lg-clicky"
            >
              Simpan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
