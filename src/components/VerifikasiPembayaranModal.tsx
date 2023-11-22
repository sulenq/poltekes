import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  noreg: number;
};

export default function VerifikasiPembayaranModal({ noreg }: Props) {
  return (
    <>
      <Button w={"100%"} colorScheme="ap" className="lg-clicky">
        Verifikasi Pembayaran
      </Button>
    </>
  );
}
