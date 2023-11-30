import { Button, Text } from "@chakra-ui/react";
import React from "react";
import UnggahBerkasLanjutan from "./UnggahBerkasLanjutan";
import { Link } from "react-router-dom";

export default function CustomerAksiPengujian(props: any) {
  const noreg = props.noreg;
  const status = props.status;

  // TODO noreg masukin ke link yang butuh

  switch (status) {
    default:
      return <Text>-</Text>;
    case "Metode Uji Belum Dipilih":
      return (
        <Button
          w={"100%"}
          colorScheme="ap"
          className="lg-clicky"
          as={Link}
          to={"/customer/pengujian/pendaftaran-pengujian/1/pilih-metode-uji"}
          fontSize={["13px !important", null, "15px !important"]}
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
          fontSize={["13px !important", null, "15px !important"]}
        >
          Unggah Berkas
        </Button>
      );
    case "Verifikasi Berkas Ditolak":
      return (
        <Button
          w={"100%"}
          colorScheme="ap"
          className="lg-clicky"
          as={Link}
          to={"/customer/pengujian/pendaftaran-pengujian/1/unggah-berkas"}
          fontSize={["13px !important", null, "15px !important"]}
        >
          Unggah Berkas
        </Button>
      );
    case "Berkas Lanjutan Belum Diunggah":
      return <UnggahBerkasLanjutan noreg={noreg} />;
    case "Verifikasi Berkas Lanjutan Ditolak":
      return <UnggahBerkasLanjutan noreg={noreg} />;
    case "Pengujian Selesai":
      return (
        <Button w={"100%"} colorScheme="ap" className="lg-clicky">
          Unduh Hasil Pengujian
        </Button>
      );
  }
}
