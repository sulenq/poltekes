import React from "react";
import {
  Box,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MapPin, Phone } from "@phosphor-icons/react";
import { iconSize } from "../const/sizes";

export default function Footer() {
  return (
    <VStack>
      <SimpleGrid columns={[1, null, 2]} gap={6} color={"white"}>
        <Stack flexDir={["column", null, "row"]} gap={4} align={"flex-start"}>
          <Image src={"/logo192.png"} w={"100%"} maxW={"122px"} />

          <Box mt={3}>
            <Text fontSize={20} fontWeight={700} mb={2} lineHeight={1}>
              Poltekkes Kemenkes Semarang
            </Text>

            <HStack align={"flex-start"}>
              <Icon as={MapPin} fontSize={iconSize} mt={1} />
              <Text>
                Jl. Tirto Agung, Pedalangan, Banyumanik, Kota Semarang, 50239,
                Jawa Tengah, Indonesia
              </Text>
            </HStack>
          </Box>
        </Stack>

        <Box mt={3}>
          <Text fontWeight={700} mb={2} lineHeight={1}>
            Kontak
          </Text>

          <HStack mb={1}>
            <Icon as={Phone} fontSize={iconSize} />
            <Text>+62 898-8584-563 (Ana Septiana ) </Text>
          </HStack>

          <HStack mb={1}>
            <Icon as={Phone} fontSize={iconSize} />
            <Text>+62 813-2536-5605 (Ary Kurniawati ) </Text>
          </HStack>

          <HStack mb={1}>
            <Icon as={Phone} fontSize={iconSize} />
            <Text>+62 813-2536-5605 (Ary Kurniawati ) </Text>
          </HStack>
        </Box>
      </SimpleGrid>
    </VStack>
  );
}
