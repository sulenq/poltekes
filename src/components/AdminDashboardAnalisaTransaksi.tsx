import { Box, HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Circle } from "@phosphor-icons/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function AdminDashboardsAnalisaTransaksi() {
  const bg = useColorModeValue("white", "dark");
  const labels = getArrayOfDaysThisMonth();
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Transaksi",
        data: [
          5, 6, 7, 5, 7, 8, 2, 3, 2, 1, 2, 6, 2, 6, 5, 7, 1, 2, 3, 2, 1, 2, 6,
          2, 4, 2, 7, 5, 11, 4,
        ],
        fill: true,
        backgroundColor: "#20aa50",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  function getArrayOfDaysThisMonth() {
    const date = new Date();
    const currentMonth = date.getMonth(); // Mendapatkan indeks bulan saat ini (dimulai dari 0)
    const daysInMonth = new Date(
      date.getFullYear(),
      currentMonth + 1,
      0,
    ).getDate(); // Mendapatkan jumlah hari dalam bulan ini

    // Membuat array dari 1 sampai jumlah hari dalam bulan
    const arrayOfDays = Array.from(
      { length: daysInMonth },
      (_, index) => index + 1,
    );

    return arrayOfDays;
  }

  return (
    <Box borderRadius={16} p={6} bg={bg} overflow={"auto"}>
      <HStack mb={4} justify={"space-between"}>
        <Text fontSize={[18, null, 20]} fontWeight={600}>
          Analisa Transaksi
        </Text>

        <HStack>
          <Icon as={Circle} weight={"fill"} color={"p.600"} />

          <Text>banyaknya pengujian</Text>
        </HStack>
      </HStack>

      <Bar data={data} options={options} />
    </Box>
  );
}
