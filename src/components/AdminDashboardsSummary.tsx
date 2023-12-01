import {
  Badge,
  Box,
  Center,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  ArrowDown,
  ArrowUp,
  Package,
  Receipt,
  TestTube,
  UsersThree,
} from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";
import useFormatNumber from "../utils/useFormatNumber";
import useAdminDashboardsPeriodicFilter from "../globalState/useAdminDashboardsPeriodicFilter";

export default function DashboardsSummary() {
  const data = {
    totalCustomer: {
      total: 16,
      pertumbuhan: true,
      rate: 31.2,
    },
    totalPemasukan: {
      total: 23400000,
      pertumbuhan: false,
      rate: 5.5,
    },
    totalPengujian: {
      total: 43,
      pertumbuhan: true,
      rate: 22.6,
    },
    totalTransaksi: {
      total: 43,
      pertumbuhan: true,
      rate: 12.5,
    },
  };
  const bg = useColorModeValue("white", "dark");
  const fn = useFormatNumber;
  const { periode } = useAdminDashboardsPeriodicFilter();

  return (
    <SimpleGrid columns={[1, 2, 2, 4]} gap={4} w={"100%"}>
      <Box borderRadius={16} p={[4, 6, 6]} bg={bg}>
        <HStack mb={4} gap={3} justify={"space-between"}>
          <Center borderRadius={8} p={2} bg={"var(--divider2)"}>
            <Icon as={UsersThree} weight="fill" fontSize={[22, null, 24]} />
          </Center>

          <Tooltip
            label={`${periode} ini ${
              data.totalCustomer.pertumbuhan ? "naik" : "turun"
            } ${data.totalCustomer.rate}% dari ${periode} lalu`}
            openDelay={500}
            bg={data.totalCustomer.pertumbuhan ? "green.500" : "red.500"}
          >
            <Badge
              p={2}
              borderRadius={8}
              colorScheme={data.totalCustomer.pertumbuhan ? "ap" : "red"}
              fontWeight={400}
            >
              <HStack>
                <Icon
                  as={data.totalCustomer.pertumbuhan ? ArrowUp : ArrowDown}
                  fontSize={iconSize}
                />
                <Text>{data.totalCustomer.rate}%</Text>
              </HStack>
            </Badge>
          </Tooltip>
        </HStack>

        <Text fontWeight={500} mb={4}>
          Total Customer
        </Text>

        <Text fontSize={[22, null, 24]} fontWeight={700}>
          {data.totalCustomer.total}
        </Text>
      </Box>

      <Box borderRadius={16} p={[4, 6, 6]} bg={bg}>
        <HStack mb={4} gap={3} justify={"space-between"}>
          <Center borderRadius={8} p={2} bg={"var(--divider2)"}>
            <Icon as={Package} weight="fill" fontSize={[22, null, 24]} />
          </Center>

          <Tooltip
            label={`${periode} ini ${
              data.totalPemasukan.pertumbuhan ? "naik" : "turun"
            } ${data.totalPemasukan.rate}% dari ${periode} lalu`}
            openDelay={500}
            bg={data.totalPemasukan.pertumbuhan ? "green.500" : "red.500"}
          >
            <Badge
              p={2}
              borderRadius={8}
              colorScheme={data.totalPemasukan.pertumbuhan ? "ap" : "red"}
              fontWeight={400}
            >
              <HStack>
                <Icon
                  as={data.totalPemasukan.pertumbuhan ? ArrowUp : ArrowDown}
                  fontSize={iconSize}
                />
                <Text>{data.totalPemasukan.rate}%</Text>
              </HStack>
            </Badge>
          </Tooltip>
        </HStack>

        <Text fontWeight={500} mb={4}>
          Total Pemasukan
        </Text>

        <Text fontSize={[22, null, 24]} fontWeight={700}>
          Rp {fn(data.totalPemasukan.total)}
        </Text>
      </Box>

      <Box borderRadius={16} p={[4, 6, 6]} bg={bg}>
        <HStack mb={4} gap={3} justify={"space-between"}>
          <Center borderRadius={8} p={2} bg={"var(--divider2)"}>
            <Icon as={TestTube} weight="fill" fontSize={[22, null, 24]} />
          </Center>

          <Tooltip
            label={`${periode} ini ${
              data.totalPengujian.pertumbuhan ? "naik" : "turun"
            } ${data.totalPengujian.rate}% dari ${periode} lalu`}
            openDelay={500}
            bg={data.totalPengujian.pertumbuhan ? "green.500" : "red.500"}
          >
            <Badge
              p={2}
              borderRadius={8}
              colorScheme={data.totalPengujian.pertumbuhan ? "ap" : "red"}
              fontWeight={400}
            >
              <HStack>
                <Icon
                  as={data.totalPengujian.pertumbuhan ? ArrowUp : ArrowDown}
                  fontSize={iconSize}
                />
                <Text>{data.totalPengujian.rate}%</Text>
              </HStack>
            </Badge>
          </Tooltip>
        </HStack>

        <Text fontWeight={500} mb={4}>
          Total Pengujian
        </Text>

        <Text fontSize={[22, null, 24]} fontWeight={700}>
          {data.totalPengujian.total}
        </Text>
      </Box>

      <Box borderRadius={16} p={[4, 6, 6]} bg={bg}>
        <HStack mb={4} gap={3} justify={"space-between"}>
          <Center borderRadius={8} p={2} bg={"var(--divider2)"}>
            <Icon as={Receipt} weight="fill" fontSize={[22, null, 24]} />
          </Center>

          <Tooltip
            label={`${periode} ini ${
              data.totalTransaksi.pertumbuhan ? "naik" : "turun"
            } ${data.totalTransaksi.rate}% dari ${periode} lalu`}
            openDelay={500}
            bg={data.totalTransaksi.pertumbuhan ? "green.500" : "red.500"}
          >
            <Badge
              p={2}
              borderRadius={8}
              colorScheme={data.totalTransaksi.pertumbuhan ? "ap" : "red"}
              fontWeight={400}
            >
              <HStack>
                <Icon
                  as={data.totalTransaksi.pertumbuhan ? ArrowUp : ArrowDown}
                  fontSize={iconSize}
                />
                <Text>{data.totalTransaksi.rate}%</Text>
              </HStack>
            </Badge>
          </Tooltip>
        </HStack>

        <Text fontWeight={500} mb={4}>
          Total Transaksi
        </Text>

        <Text fontSize={[22, null, 24]} fontWeight={700}>
          {data.totalTransaksi.total}
        </Text>
      </Box>
    </SimpleGrid>
  );
}
