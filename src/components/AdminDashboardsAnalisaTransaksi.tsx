import {
  Box,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
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
  const xLabel = "Tanggal (Harian)";
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
        borderColor: "#20aa50",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xLabel,
        },
        grid: {
          color: "#b4b4b450",
        },
      },
      y: {
        grid: {
          color: "#b4b4b450",
        },
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
    <Box
      borderRadius={16}
      p={[4, 6, 6]}
      bg={bg}
      overflow={"auto"}
    >
      <SimpleGrid
        mb={4}
        columns={[1, 2, 2]}
        gap={[0, 2, 2]}
      >
        <Text
          fontSize={[18, null, 20]}
          fontWeight={600}
        >
          Analisa Transaksi
        </Text>

        <HStack justifySelf={["flex-start", "flex-end", "flex-end"]}>
          <Icon
            as={Circle}
            weight={"fill"}
            color={"p.600"}
          />

          <Text fontSize={[10, null, 12]}>banyaknya pengujian</Text>
        </HStack>
      </SimpleGrid>

      <Box>
        <Bar
          data={data}
          options={options}
        />
      </Box>
    </Box>
  );
}
