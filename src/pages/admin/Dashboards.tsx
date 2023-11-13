import React from "react";
import AdminContainer from "../../components/AdminContainer";
import AdminDashboardPeriodicFilter from "../../components/AdminDashboardPeriodicFilter";
import { Box } from "@chakra-ui/react";

export default function Dashboards() {
  return (
    <AdminContainer active={"Dashboards"}>
      <Box alignSelf={"flex-end"}>
        <AdminDashboardPeriodicFilter />
      </Box>
    </AdminContainer>
  );
}
