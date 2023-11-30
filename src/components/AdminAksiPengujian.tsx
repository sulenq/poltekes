import { Text } from "@chakra-ui/react";
import React from "react";
import VerifikasiBerkasModal from "../components/VerifikasiBerkasModal";
import InputKontrakTagihanModal from "./InputKontrakTagihanModal";
import VerifikasiBerkasLanjutanModal from "./VerifikasiBerkasLanjutanModal";
import UnggahHasilPengujian from "./UnggahHasilPengujian";
import InputTanggalPengujianModal from "./InputTanggalPengujianModal";

export default function AdminAksiPengujian(props: any) {
  const noreg = props.noreg;
  const status = props.status;

  switch (status) {
    default:
      return <Text>-</Text>;
    case "Verifikasi Berkas":
      return <VerifikasiBerkasModal noreg={noreg} />;
    case "Berkas Diverifikasi":
      return <InputKontrakTagihanModal noreg={noreg} />;
    case "Verifikasi Berkas Lanjutan":
      return <VerifikasiBerkasLanjutanModal noreg={noreg} />;
    case "Berkas Lanjutan Diverifikasi":
      return <InputTanggalPengujianModal noreg={noreg} />;
    case "Dalam Pengujian":
      return <UnggahHasilPengujian noreg={noreg} />;
  }
}
