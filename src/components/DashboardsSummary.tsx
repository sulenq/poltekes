import {
  Badge,
  Box,
  Center,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  ArrowUp,
  Package,
  Receipt,
  TestTube,
  UsersThree,
} from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";

export default function DashboardsSummary() {
  const data = {
    totalCustomer: {
      total: 16,
      pertumbuhan: true,
      rate: 31.2,
    },
    totalProduk: {
      total: 16,
      pertumbuhan: false,
      rate: 5.5,
    },
    totalPengujian: {
      total: 16,
      pertumbuhan: true,
      rate: 22.6,
    },
    totalTransaksi: {
      total: 16,
      pertumbuhan: true,
      rate: 12.5,
    },
  };
  const bg = useColorModeValue("white", "dark");

  return (
    <SimpleGrid columns={[1, 2, 2, 4]} gap={4} w={"100%"}>
      <Box borderRadius={16} p={6} bg={bg}>
        <HStack mb={4} gap={3}>
          <Center borderRadius={8} p={2} bg={"var(--divider)"}>
            <Icon as={UsersThree} weight="fill" fontSize={[22, null, 24]} />
          </Center>

          <Text fontWeight={500}>Total Customer</Text>
        </HStack>

        <HStack justify={"space-between"}>
          <Text fontSize={[22, null, 24]} fontWeight={700}>
            {data.totalCustomer.total}
          </Text>

          <Badge
            p={2}
            borderRadius={8}
            colorScheme={data.totalCustomer.pertumbuhan ? "ap" : "red"}
            fontWeight={400}
          >
            <HStack>
              <Icon as={ArrowUp} fontSize={iconSize} />
              <Text>{data.totalCustomer.rate}%</Text>
            </HStack>
          </Badge>
        </HStack>
      </Box>

      <Box borderRadius={16} p={6} bg={bg}>
        <HStack mb={4} gap={3}>
          <Center borderRadius={8} p={2} bg={"var(--divider)"}>
            <Icon as={Package} weight="fill" fontSize={[22, null, 24]} />
          </Center>

          <Text fontWeight={500}>Total Produk</Text>
        </HStack>

        <HStack justify={"space-between"}>
          <Text fontSize={[22, null, 24]} fontWeight={700}>
            {data.totalProduk.total}
          </Text>

          <Badge
            p={2}
            borderRadius={8}
            colorScheme={data.totalProduk.pertumbuhan ? "ap" : "red"}
            fontWeight={400}
          >
            <HStack>
              <Icon as={ArrowUp} fontSize={iconSize} />
              <Text>{data.totalProduk.rate}%</Text>
            </HStack>
          </Badge>
        </HStack>
      </Box>

      <Box borderRadius={16} p={6} bg={bg}>
        <HStack mb={4} gap={3}>
          <Center borderRadius={8} p={2} bg={"var(--divider)"}>
            <Icon as={TestTube} weight="fill" fontSize={[22, null, 24]} />
          </Center>

          <Text fontWeight={500}>Total Pengujian</Text>
        </HStack>

        <HStack justify={"space-between"}>
          <Text fontSize={[22, null, 24]} fontWeight={700}>
            {data.totalPengujian.total}
          </Text>

          <Badge
            p={2}
            borderRadius={8}
            colorScheme={data.totalPengujian.pertumbuhan ? "ap" : "red"}
            fontWeight={400}
          >
            <HStack>
              <Icon as={ArrowUp} fontSize={iconSize} />
              <Text>{data.totalPengujian.rate}%</Text>
            </HStack>
          </Badge>
        </HStack>
      </Box>

      <Box borderRadius={16} p={6} bg={bg}>
        <HStack mb={4} gap={3}>
          <Center borderRadius={8} p={2} bg={"var(--divider)"}>
            <Icon as={Receipt} weight="fill" fontSize={[22, null, 24]} />
          </Center>

          <Text fontWeight={500}>Total Transaksi</Text>
        </HStack>

        <HStack justify={"space-between"}>
          <Text fontSize={[22, null, 24]} fontWeight={700}>
            {data.totalTransaksi.total}
          </Text>

          <Badge
            p={2}
            borderRadius={8}
            colorScheme={data.totalTransaksi.pertumbuhan ? "ap" : "red"}
            fontWeight={400}
          >
            <HStack>
              <Icon as={ArrowUp} fontSize={iconSize} />
              <Text>{data.totalTransaksi.rate}%</Text>
            </HStack>
          </Badge>
        </HStack>
      </Box>
    </SimpleGrid>
  );
}
