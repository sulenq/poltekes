import React from "react";
import AdminContainer from "../../components/AdminContainer";
import AdminDashboardPeriodicFilter from "../../components/AdminDashboardsPeriodicFilter";
import { Box, SimpleGrid } from "@chakra-ui/react";
import DashboardsSummary from "../../components/AdminDashboardsSummary";
import AdminDashboardsAnalisaTransaksi from "../../components/AdminDashboardsAnalisaTransaksi";
import AdminDashboardsTransaksiTerbaru from "../../components/AdminDashboardsTransaksiTerbaru";
import useScrollToTop from "../../utils/useScrollToTop";
import AdminDashboardsAnalisaPemasukan from "../../components/AdminDashboardsAnalisaPemasukan";

export default function Dashboards() {
  useScrollToTop();
  return (
    <AdminContainer active={["Dashboards"]}>
      <>
        <Box
          alignSelf={"flex-end"}
          mb={4}
        >
          <AdminDashboardPeriodicFilter />
        </Box>

        <Box mb={4}>
          <DashboardsSummary />
        </Box>

        <SimpleGrid
          mb={4}
          columns={[1, null, 2]}
          gap={4}
        >
          <AdminDashboardsAnalisaTransaksi />
          <AdminDashboardsAnalisaPemasukan />
        </SimpleGrid>

        <Box
          mb={6}
          overflow={"auto"}
        >
          <AdminDashboardsTransaksiTerbaru />
        </Box>
      </>
    </AdminContainer>
  );
}
