import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Text,
  useDisclosure,
  Link as ChakraLink,
  ModalFooter,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useFormatNumber from "../utils/useFormatNumber";
import DividerFullHorizontal from "./DividerFullHorizontal";
import { CaretDown } from "@phosphor-icons/react";
import RequiredForm from "./RequiredForm";
import FilesInput from "./FilesInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { checkBoxTextMt } from "../const/sizes";
import useBackOnClose from "../utils/useBackOnClose";

export default function UnggahBerkasLanjutan(props: any) {
  //   const noreg = props.noreg;
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  //   TODO get data tagihan by noreg
  const data = {
    biayaPengujian: 1800000,
    biayaAdmin: 10000,
    totalTagihan: 1810000,
  };

  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      berkasKontrak: "",
      buktiPembayaran: "",
      agreement: false,
    },

    validationSchema: yup.object().shape({
      berkasKontrak: yup
        .array()
        .required("Berkas Kontrak yang sudah ditanadatangani harus diunggah")
        .test(
          "fileType",
          "Hanya file PDF, JPG, PNG yang diperbolehkan",
          (value) =>
            value.every(
              (file) =>
                file.type === "application/pdf" ||
                file.type === "image/jpeg" ||
                file.type === "image/png"
            )
        )
        .test("fileSize", "Ukuran maksimal file adalah 1 MB", (value) =>
          value.every((file) => file.size <= 1000000)
        ),
      buktiPembayaran: yup
        .array()
        .required("Bukti Pembayaran harus diunggah")
        .test(
          "fileType",
          "Hanya file PDF, JPG, PNG yang diperbolehkan",
          (value) =>
            value.every(
              (file) =>
                file.type === "application/pdf" ||
                file.type === "image/jpeg" ||
                file.type === "image/png"
            )
        )
        .test("fileSize", "Ukuran maksimal file adalah 1 MB", (value) =>
          value.every((file) => file.size <= 1000000)
        ),
      agreement: yup
        .boolean()
        .oneOf([true], "Anda harus menyetujui Syarat dan Ketentuan")
        .required("Anda harus menyetujui Syarat dan Ketentuan"),
    }),

    onSubmit: (values, { resetForm }) => {
      // TODO post bayar tagihan

      console.log(values);
    },
  });

  const fn = useFormatNumber;

  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  return (
    <>
      <Button
        w={"100%"}
        colorScheme={"ap"}
        className="lg-clicky"
        onClick={onOpen}
      >
        Unggah Berkas Lanjutan
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={handleOnClose}
        size={"xl"}
        scrollBehavior="inside"
      >
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Tagihan Pengujian</ModalHeader>

          <ModalBody>
            <Alert
              variant={"left-accent"}
              mb={4}
              alignItems={"flex-start"}
              minW={"100% !important"}
              borderRadius={8}
            >
              <Box w={"100%"}>
                <AlertTitle
                  color={"blue.500"}
                  mb={2}
                  fontSize={[18, null, 20]}
                  fontWeight={600}
                >
                  Tagihan Pembayaran Anda!!
                </AlertTitle>

                <AlertDescription>
                  <HStack justify={"space-between"} mb={1}>
                    <Text fontSize={[12, null, 14]} opacity={0.5}>
                      Biaya Pengujian
                    </Text>
                    <Text fontWeight={600}>Rp {fn(data.biayaPengujian)}</Text>
                  </HStack>

                  <HStack justify={"space-between"}>
                    <Text fontSize={[12, null, 14]} opacity={0.5}>
                      Biaya Admin
                    </Text>
                    <Text fontWeight={600}>Rp {fn(data.biayaAdmin)}</Text>
                  </HStack>

                  <DividerFullHorizontal my={2} />

                  <HStack justify={"space-between"}>
                    <Text fontSize={[12, null, 14]} opacity={0.5}>
                      Biaya Admin
                    </Text>
                    <Text fontWeight={600} fontSize={[18, null, 20]}>
                      Rp {fn(data.totalTagihan)}
                    </Text>
                  </HStack>
                </AlertDescription>
              </Box>
            </Alert>

            <Accordion mb={4} allowMultiple>
              <AccordionItem className="accordionItem">
                <AccordionButton
                  p={4}
                  borderRadius={16}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  onClick={() => {
                    if (accordionIsOpen) {
                      setAccordionIsOpen(false);
                    } else {
                      setAccordionIsOpen(true);
                    }
                  }}
                >
                  <Text
                    fontSize={[16, null, 18]}
                    fontWeight={600}
                    textAlign={"left"}
                    mr={8}
                  >
                    Tata Cara Pembayaran Tagihan Pengujian
                  </Text>
                  <Center
                    bg={accordionIsOpen ? "p.500" : "var(--divider)"}
                    borderRadius={"full"}
                    p={2}
                    alignSelf={"flex-start"}
                  >
                    <Icon
                      as={CaretDown}
                      fontSize={[18, null, 20]}
                      weight="bold"
                      color={accordionIsOpen ? "white" : "p.500"}
                      transform={accordionIsOpen ? "rotate(-180deg)" : ""}
                      transition={"200ms"}
                    />
                  </Center>
                </AccordionButton>

                <AccordionPanel p={4} pt={2}>
                  <OrderedList>
                    <ListItem mb={2} mt={2}>
                      <b>Akses Akun</b> : Login ke akun perbankan Anda.
                    </ListItem>
                    <ListItem mb={2}>
                      <b> Pilih Pembayaran</b> : Klik opsi "Pembayaran" atau
                      "Transfer."
                    </ListItem>
                    <ListItem mb={2}>
                      <b>Pilih Rekening Sumber</b> : Pilih rekening asal.
                    </ListItem>
                    <ListItem mb={2}>
                      <b>Masukan Rekening atau BRIVA Poltekkes</b> : BRI
                      123xxxxxx, VA: 123xxxxxxxx.
                    </ListItem>
                    <ListItem mb={2}>
                      <b>Isi Jumlah</b> : Masukkan jumlah pembayaran.
                    </ListItem>
                    <ListItem mb={2}>
                      <b>Konfirmasi Detail</b> : Periksa dan konfirmasi detail
                      transaksi.
                    </ListItem>
                    <ListItem mb={2}>
                      <b>Otorisasi</b> : Klik "Kirim" atau "Lanjutkan" untuk
                      menyelesaikan pembayaran.
                    </ListItem>
                    <ListItem mb={2}>
                      <b>Konfirmasi Sukses</b> : Dapatkan pesan konfirmasi.
                    </ListItem>
                    <ListItem>
                      <b>Simpan Bukti Transfers</b> dan{" "}
                      <b>Upload bukti pembayaran</b>
                      di bawah ini
                    </ListItem>
                  </OrderedList>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <form id="buktiPembayaranForm" onSubmit={formik.handleSubmit}>
              <FormControl
                mb={4}
                isInvalid={formik.errors.berkasKontrak ? true : false}
              >
                <FormLabel>
                  Unggah Berkas Kontrak <RequiredForm />
                </FormLabel>
                <FilesInput formik={formik} name="berkasKontrak" />
                <FormErrorMessage>
                  {formik.errors.berkasKontrak}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                mb={4}
                isInvalid={formik.errors.buktiPembayaran ? true : false}
              >
                <FormLabel>
                  Unggah Bukti Pembayaran <RequiredForm />
                </FormLabel>
                <FilesInput formik={formik} name="buktiPembayaran" />
                <FormErrorMessage>
                  {formik.errors.buktiPembayaran}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.agreement ? true : false}>
                <Checkbox
                  alignItems={"flex-start"}
                  colorScheme="ap"
                  gap={1}
                  isChecked={formik.values.agreement}
                  isInvalid={formik.errors.agreement ? true : false}
                  onChange={() => {
                    formik.setFieldValue("agreement", !formik.values.agreement);
                  }}
                >
                  <Text mt={checkBoxTextMt} fontSize={[12, null, 14]}>
                    Saya dengan ini menyatakan setuju dengan{" "}
                    <ChakraLink
                      color="p.500"
                      href="/syarat-dan-ketentuan"
                      fontSize={["12px !important", null, "14px !important"]}
                      isExternal
                      fontWeight={600}
                    >
                      syarat dan ketentuan
                    </ChakraLink>{" "}
                    yang berlaku di LPPT POLTEKKES Kemenkes Semarang
                  </Text>
                </Checkbox>
                <FormErrorMessage>{formik.errors.agreement}</FormErrorMessage>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="ap"
              type="submit"
              form="buktiPembayaranForm"
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
