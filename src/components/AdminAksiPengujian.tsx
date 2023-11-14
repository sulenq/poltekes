import { Button, Text } from "@chakra-ui/react";
import React from "react";

export default function AdminAksiPengujian(props: any) {
  //   const noreg = props.noreg;
  const status = props.status;

  switch (status) {
    default:
      return <Text>-</Text>;
    case "Verifikasi Berkas":
      return (
        <Button
          w={"100%"}
          colorScheme="ap"
          className="lg-clicky"
        >
          Verifikasi Berkas
        </Button>
      );
    case "Verifikasi Pembayaran":
      return (
        <Button
          w={"100%"}
          colorScheme="ap"
          className="lg-clicky"
        >
          Verifikasi Pembayaran
        </Button>
      );
    case "Pembayaran Diverifikasi":
      return (
        <Button
          w={"100%"}
          colorScheme="ap"
          className="lg-clicky"
        >
          Input Tanggal Pengujian
        </Button>
      );
    case "Pengujian Selesai":
      return (
        <Button
          w={"100%"}
          colorScheme="ap"
          className="lg-clicky"
        >
          Unggah Hasil Pengujian
        </Button>
      );
  }
}
