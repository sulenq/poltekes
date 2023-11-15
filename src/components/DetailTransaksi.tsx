import {
  Box,
  Button,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { File } from "@phosphor-icons/react";
import React from "react";
import useBackOnClose from "../utils/useBackOnClose";

type Props = {
  id: number;
};

export default function DetailTransaksi({ id }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);

  const data = {
    produk: "Pengujian X - Ajigile",
    namaSertifikat: "Panjul Simonsely",
    namaLengkap: "Panjul Simonsely",
    fotoSampel: [
      "/images/sampleExample.png",
      "/images/sampleExample.png",
      "/images/sampleExample.png",
    ],
    filePendukung: [
      { nama: "File Pendukung A", size: "13.2Kb" },
      { nama: "File Pendukung X", size: "3.7Kb" },
    ],
    fileKontrak: {
      nama: "Kontrak 001",
      size: "12Kb",
    },
    buktiPembayaran: "/images/buktiPembayaranExample.png",
  };

  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  return (
    <>
      <Button
        colorScheme="ap"
        variant={"outline"}
        className="lg-clicky"
        onClick={onOpen}
      >
        Detail
      </Button>

      <Modal
        isOpen={isOpen}
        size={"xl"}
        onClose={handleOnClose}
        scrollBehavior="inside"
      >
        <ModalOverlay />

        <ModalContent maxW={"800px"}>
          <ModalCloseButton />

          <ModalHeader>Detail Transaksi</ModalHeader>

          <ModalBody>
            <SimpleGrid
              columns={2}
              gap={4}
              mb={6}
            >
              <Box>
                <Text>No. Registrasi</Text>
                <Text fontWeight={500}>{id.toString().padStart(3, "0")}</Text>
              </Box>

              <Box>
                <Text>Produk</Text>
                <Text fontWeight={500}>{data.produk}</Text>
              </Box>

              <Box>
                <Text>Nama Sertifikat</Text>
                <Text fontWeight={500}>{data.namaSertifikat}</Text>
              </Box>

              <Box>
                <Text>Nama Lengkap</Text>
                <Text fontWeight={500}>{data.namaLengkap}</Text>
              </Box>
            </SimpleGrid>

            <Box mb={6}>
              <Text mb={2}>Foto Sampel</Text>

              <Button
                colorScheme="ap"
                className="lg-clicky"
                mb={3}
              >
                Unduh
              </Button>

              <SimpleGrid
                columns={[2, 3]}
                gap={4}
              >
                {data.fotoSampel.map((d, i) => (
                  <Image
                    key={i}
                    src={d}
                  />
                ))}
              </SimpleGrid>
            </Box>

            <Box mb={6}>
              <Text mb={2}>File Pendukung</Text>

              <Button
                colorScheme="ap"
                className="lg-clicky"
                mb={3}
              >
                Unduh
              </Button>

              <SimpleGrid
                columns={[2, 3]}
                gap={4}
              >
                {data.filePendukung.map((d, i) => (
                  <VStack
                    key={i}
                    gap={0}
                    borderRadius={8}
                    bg={"var(--divider)"}
                    p={2}
                    border={"1px solid var(--divider3)"}
                  >
                    <Icon
                      as={File}
                      fontSize={[50, null, 70]}
                      weight="light"
                      mb={2}
                    />
                    <Text
                      fontWeight={500}
                      textAlign={"center"}
                    >
                      {d.nama}
                    </Text>
                    <Text
                      textAlign={"center"}
                      fontSize={[12, null, 14]}
                      opacity={0.5}
                    >
                      {d.size}
                    </Text>
                  </VStack>
                ))}
              </SimpleGrid>
            </Box>

            <Box mb={6}>
              <Text mb={2}>File Kontrak</Text>

              <Button
                colorScheme="ap"
                className="lg-clicky"
                mb={3}
              >
                Unduh
              </Button>

              <SimpleGrid
                columns={[2, 3]}
                gap={4}
              >
                <VStack
                  gap={0}
                  borderRadius={8}
                  bg={"var(--divider)"}
                  p={2}
                  border={"1px solid var(--divider3)"}
                >
                  <Icon
                    as={File}
                    fontSize={[50, null, 70]}
                    weight="light"
                    mb={2}
                  />
                  <Text
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    {data.fileKontrak.nama}
                  </Text>
                  <Text
                    textAlign={"center"}
                    fontSize={[12, null, 14]}
                    opacity={0.5}
                  >
                    {data.fileKontrak.size}
                  </Text>
                </VStack>
              </SimpleGrid>
            </Box>

            <Box mb={6}>
              <Text mb={2}>Bukti Pembayaran</Text>

              <Button
                colorScheme="ap"
                className="lg-clicky"
                mb={3}
              >
                Unduh
              </Button>

              <SimpleGrid
                columns={2}
                gap={4}
              >
                <VStack
                  gap={0}
                  borderRadius={8}
                  bg={"var(--divider)"}
                  p={2}
                  border={"1px solid var(--divider3)"}
                >
                  <Image src={data.buktiPembayaran} />
                </VStack>
              </SimpleGrid>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              variant={"outline"}
              colorScheme="ap"
              onClick={handleOnClose}
            >
              Keluar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
