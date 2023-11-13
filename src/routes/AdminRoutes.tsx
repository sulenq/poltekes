import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../middleware/RequireAuth";
import MissingPage from "../pages/MissingPage";
import Dashboards from "../pages/admin/Dashboards";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Dashboards />
          </RequireAuth>
        }
      />

      <Route path="*" element={<MissingPage />} />
    </Routes>
  );
}
