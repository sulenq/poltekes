import { Button, Text } from "@chakra-ui/react";
import React from "react";
import BayarTagihanModal from "./BayarTagihanModal";
import { Link } from "react-router-dom";

export default function CustomerAksiPengujian(props: any) {
  const noreg = props.noreg;
  const status = props.status;

  switch (status) {
    default:
      return <Text>-</Text>;
    case "Belum Memilih Metode Uji":
      return (
        <Button
          w={"100%"}
          colorScheme="ap"
          className="lg-clicky"
          as={Link}
          to={"/customer/pengujian/pendaftaran-pengujian/1/pilih-metode-uji"}
        >
          Pilih Metode Uji
        </Button>
      );
    case "Berkas Belum Lengkap":
      return (
        <Button
          w={"100%"}
          colorScheme="ap"
          className="lg-clicky"
          as={Link}
          to={"/customer/pengujian/pendaftaran-pengujian/1/unggah-berkas"}
        >
          Unggah Berkas
        </Button>
      );
    case "Tagihan Belum Dibayar":
      return <BayarTagihanModal noreg={noreg} />;
    case "Pengujian Selesai":
      return (
        <Button w={"100%"} colorScheme="ap" className="lg-clicky">
          Unduh Hasil Pengujian
        </Button>
      );
  }
}
