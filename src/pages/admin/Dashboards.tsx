import React from "react";
import AdminContainer from "../../components/AdminContainer";
import AdminDashboardPeriodicFilter from "../../components/AdminDashboardsPeriodicFilter";
import { Box } from "@chakra-ui/react";
import DashboardsSummary from "../../components/AdminDashboardsSummary";
import AdminDashboardsAnalisaTransaksi from "../../components/AdminDashboardAnalisaTransaksi";

export default function Dashboards() {
  return (
    <AdminContainer active={["Dashboards"]}>
      <>
        <Box alignSelf={"flex-end"} mb={[4, 5, 6]}>
          <AdminDashboardPeriodicFilter />
        </Box>

        <Box mb={4}>
          <DashboardsSummary />
        </Box>

        <Box mb={4}>
          <AdminDashboardsAnalisaTransaksi />
        </Box>
      </>
    </AdminContainer>
  );
}
