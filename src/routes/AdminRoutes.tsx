import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../middleware/RequireAuth";
import MissingPage from "../pages/MissingPage";
import Dashboards from "../pages/admin/Dashboards";
import AdminProduk from "../pages/admin/AdminProduk";

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

      <Route
        path="/produk"
        element={
          <RequireAuth>
            <AdminProduk />
          </RequireAuth>
        }
      />

      <Route path="*" element={<MissingPage />} />
    </Routes>
  );
}
