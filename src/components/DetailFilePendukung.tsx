import { Box, Icon, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { File } from "@phosphor-icons/react";
import React from "react";

export default function DetailFilePendukung() {
  const data = [
    { nama: "Berkas Kontrak", size: "52.3 Kb" },
    { nama: "File Pendukung", size: "22.3 Kb" },
    { nama: "File Pendukung 2", size: "32.3 Kb" },
    { nama: "File Pendukung 3", size: "21.3 Kb" },
  ];

  return (
    <Box>
      <Text
        fontWeight={600}
        mb={4}
      >
        File Pendukung
      </Text>

      <SimpleGrid
        columns={[2, 3, 4]}
        gap={4}
      >
        {data.map((d, i) => (
          <VStack
            key={i}
            gap={0}
            borderRadius={8}
            bg={"var(--divider)"}
            p={2}
            border={"1px solid var(--divider3)"}
          >
            <Icon
              as={File}
              fontSize={[50, null, 70]}
              weight="light"
              mb={2}
            />
            <Text
              fontWeight={500}
              textAlign={"center"}
            >
              {d.nama}
            </Text>
            <Text
              textAlign={"center"}
              fontSize={[12, null, 14]}
              opacity={0.5}
            >
              {d.size}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
