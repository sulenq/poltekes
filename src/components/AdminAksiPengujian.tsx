import { Button, Text } from "@chakra-ui/react";
import React from "react";
import VerifikasiBerkasModal from "../components/VerifikasiBerkasModal";
import InputKontrakTagihanModal from "./InputKontrakTagihanModal";
import VerifikasiPembayaranModal from "./VerifikasiPembayaranModal";
import UnggahHasilPengujian from "./UnggahHasilPengujian";

export default function AdminAksiPengujian(props: any) {
  const noreg = props.noreg;
  const status = props.status;
  // TODO buat komponen yang sesuai

  switch (status) {
    default:
      return <Text>-</Text>;
    case "Verifikasi Berkas":
      return <VerifikasiBerkasModal noreg={noreg} />;
    case "Tagihan Belum Dibayar":
      return <InputKontrakTagihanModal noreg={noreg} />;
    case "Verifikasi Pembayaran":
      return <VerifikasiPembayaranModal noreg={noreg} />;
    case "Pembayaran Diverifikasi":
      return (
        <Button w={"100%"} colorScheme="ap" className="lg-clicky">
          Input Tanggal Pengujian
        </Button>
      );
    case "Dalam Pengujian":
      return <UnggahHasilPengujian noreg={noreg} />;
  }
}
