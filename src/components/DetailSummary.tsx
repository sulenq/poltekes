import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import useFormatNumber from "../utils/useFormatNumber";

export default function DetailSummary() {
  // TODO get all data from global state
  const totalMetodeUji = 1;
  const totalFotoSampel = 5;
  const totalFilePendukung = 4;
  const totalTagihan = 1800000;

  const fn = useFormatNumber;

  return (
    <SimpleGrid
      columns={[1, 2, 4]}
      bg={"var(--p500a)"}
      borderRadius={8}
      p={4}
      gap={4}
    >
      <VStack gap={1} align={["flex-start", "center"]}>
        <Text fontSize={[12, null, 14]} opacity={0.5}>
          Total Metode Uji
        </Text>
        <Text fontWeight={600}>{totalMetodeUji} Metode uji</Text>
      </VStack>

      <VStack gap={1} align={["flex-start", "center"]}>
        <Text fontSize={[12, null, 14]} opacity={0.5}>
          Total Foto Sampel
        </Text>
        <Text fontWeight={600}>{totalFotoSampel} Foto Sampel</Text>
      </VStack>

      <VStack gap={1} align={["flex-start", "center"]}>
        <Text fontSize={[12, null, 14]} opacity={0.5}>
          Total File Pendukung
        </Text>
        <Text fontWeight={600}>{totalFilePendukung} File Pendukung</Text>
      </VStack>

      <VStack gap={1} align={["flex-start", "center"]}>
        <Text fontSize={[12, null, 14]} opacity={0.5}>
          Total Metode Uji
        </Text>
        <Text fontWeight={600}>Rp {fn(totalTagihan)}</Text>
      </VStack>
    </SimpleGrid>
  );
}
