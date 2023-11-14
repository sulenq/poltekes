import React from "react";
import AdminContainer from "../../components/AdminContainer";
import { VStack } from "@chakra-ui/react";

export default function AdminTransaksi() {
  return (
    <AdminContainer active={["Transaksi"]}>
      <VStack></VStack>
    </AdminContainer>
  );
}
