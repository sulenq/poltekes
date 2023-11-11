import { Button, Text } from "@chakra-ui/react";
import React from "react";
import BayarTagihanModal from "./BayarTagihanModal";

export default function Aksi(props: any) {
  const noreg = props.noreg;
  const status = props.status;

  switch (status) {
    default:
      return <Text>-</Text>;
    case "Tagihan Belum Dibayar":
      return <BayarTagihanModal noreg={noreg} />;
    case "Berkas Belum Lengkap":
      return (
        <Button colorScheme="ap" className="lg-clicky">
          Unggah Berkas
        </Button>
      );
  }
}
