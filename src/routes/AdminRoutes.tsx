import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../middleware/RequireAuth";
import MissingPage from "../pages/MissingPage";
import AdminDashboards from "../pages/admin/AdminDashboards";
import AdminProduk from "../pages/admin/AdminProduk";
import AdminTransaksi from "../pages/admin/AdminTransaksi";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <AdminDashboards />
          </RequireAuth>
        }
      />

      <Route
        path="/transaksi"
        element={
          <RequireAuth>
            <AdminTransaksi />
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

      <Route
        path="*"
        element={<MissingPage />}
      />
    </Routes>
  );
}
