import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export default function DetailFotoSampel() {
  const data = [
    "/images/sampleExample.png",
    "/images/sampleExample.png",
    "/images/sampleExample.png",
    "/images/sampleExample.png",
    "/images/sampleExample.png",
  ];

  return (
    <Box>
      <Text fontWeight={600} mb={4}>
        Foto Sampel
      </Text>

      <SimpleGrid columns={[2, 3, 4]} gap={4}>
        {data.map((d, i) => (
          <Image key={i} src={d} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
