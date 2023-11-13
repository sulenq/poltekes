import React from "react";
import AdminContainer from "../../components/AdminContainer";
import AdminDashboardPeriodicFilter from "../../components/AdminDashboardPeriodicFilter";
import { Box } from "@chakra-ui/react";
import DashboardsSummary from "../../components/DashboardsSummary";

export default function Dashboards() {
  return (
    <AdminContainer active={"Dashboards"}>
      <>
        <Box alignSelf={"flex-end"} mb={[4, 5, 6]}>
          <AdminDashboardPeriodicFilter />
        </Box>

        <DashboardsSummary />

        
      </>
    </AdminContainer>
  );
}
