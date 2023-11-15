import React from "react";
import AdminContainer from "../../components/AdminContainer";
import { VStack } from "@chakra-ui/react";

export default function AdminProduk() {
  return (
    <AdminContainer active={["Produk", "Kelola Produk"]}>
      <VStack></VStack>
    </AdminContainer>
  );
}
