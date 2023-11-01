import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { Plus } from "@phosphor-icons/react";
import React from "react";
import { checkBoxTextMt, iconSize } from "../const/sizes";
import SelectJenisSampel from "./SelectJenisSampel";
import * as yup from "yup";
import { useFormik } from "formik";
import RequiredForm from "./RequiredForm";
import SelectBentukSampel from "./SelectBentukSampel";
import useBackOnClose from "../utils/useBackOnClose";

export default function TambahSampelModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);

  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      jenisSampel: "",
      kodeSampel: "",
      namaSampel: "",
      bentukSampel: "",
      sisaDikembalikan: false,
      catatanTambahan: "",
    },

    validationSchema: yup.object().shape({
      jenisSampel: yup.string().required("Jenis Sampel harus diisi"),
      kodeSampel: yup.string().required("Kode Sampel harus diisi"),
      namaSampel: yup.string().required("Nama Sampel harus diisi"),
      bentukSampel: yup.string().required("Bentuk Sampel harus diisi"),
      sisaDikembalikan: yup.boolean(),
      catatanTambahan: yup.string(),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });

  return (
    <>
      <Button
        leftIcon={<Icon as={Plus} fontSize={iconSize} weight="bold" />}
        colorScheme="ap"
        className="lg-clicky"
        mb={4}
        onClick={onOpen}
      >
        Tambah Sampel
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
        scrollBehavior="inside"
      >
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Data Sampel Pengujian</ModalHeader>

          <ModalBody>
            <Box borderRadius={16} p={[4, 5, 6]} bg={"p.100"} mb={6}>
              <Text
                fontSize={[18, null, 20]}
                fontWeight={600}
                color={"red"}
                mb={"10px"}
              >
                PERHATIAN!!
              </Text>

              <UnorderedList>
                <ListItem mb={2}>
                  <b>Kode Sampel</b> di isi kode unik untuk membedakan antara
                  sampel yang satu dengan yang lain (Jika sampel lebih dari
                  satu).
                </ListItem>

                <ListItem mb={2}>
                  <b>Nama sampel</b> boleh menggunakan nama yang sama jika
                  sampel lebih dari satu.
                </ListItem>

                <ListItem mb={2}>
                  <b>Sisa Dikembalikan</b> maksudnya apabila setelah pengujian
                  ada sisa sampel, maka sisa tersebut akan dikembalikan ke
                  customer, jika pilihan ini tidak di aktifkan maka sisa sampel
                  akan dimusnahkan.
                </ListItem>
              </UnorderedList>
            </Box>

            <form id="dataSampelPengujianForm" onSubmit={formik.handleSubmit}>
              <FormControl
                isInvalid={formik.errors.jenisSampel ? true : false}
                mb={4}
              >
                <FormLabel>
                  Jenis Sampel
                  <RequiredForm />
                </FormLabel>
                <SelectJenisSampel
                  formik={formik}
                  name="jenisSampel"
                  placeholder="Pilih jenis sampel"
                />
                <FormErrorMessage>{formik.errors.jenisSampel}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.kodeSampel ? true : false}
                mb={4}
              >
                <FormLabel>
                  Kode Sampel
                  <RequiredForm />
                </FormLabel>
                <Input
                  name="kodeSampel"
                  placeholder="Masukkan kode sampel"
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.kodeSampel}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.namaSampel ? true : false}
                mb={4}
              >
                <FormLabel>
                  Nama Sampel
                  <RequiredForm />
                </FormLabel>
                <Input
                  name="namaSampel"
                  placeholder="Masukkan nama sampel"
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.namaSampel}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.bentukSampel ? true : false}
                mb={4}
              >
                <FormLabel>
                  Bentuk Sampel
                  <RequiredForm />
                </FormLabel>
                <SelectBentukSampel
                  formik={formik}
                  name="bentukSampel"
                  placeholder="Pilih bentuk sampel"
                />
                <FormErrorMessage>
                  {formik.errors.bentukSampel}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.sisaDikembalikan ? true : false}
                mb={4}
              >
                <Checkbox colorScheme="ap" size={"lg"}>
                  <Text mt={checkBoxTextMt}>Sisa Dikembalikan</Text>
                </Checkbox>
                <FormErrorMessage>
                  {formik.errors.sisaDikembalikan}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.catatanTambahan ? true : false}
              >
                <FormLabel>Catatan Tambahan (Jika Ada)</FormLabel>
                <Textarea
                  name="catatanTambahan"
                  placeholder="Masukkan catatan anda"
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>
                  {formik.errors.catatanTambahan}
                </FormErrorMessage>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              form="dataSampelPengujianForm"
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
