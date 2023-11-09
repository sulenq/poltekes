import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../middleware/RequireAuth";
import Beranda from "../pages/customer/Beranda";
import Pengujian from "../pages/customer/Pengujian";
import UnggahBerkas from "../pages/customer/UnggahBerkas";
import MissingPage from "../pages/MissingPage";
import PilihMetodeUji from "../pages/customer/PilihMetodeUji";
import DetailPengujian from "../pages/customer/DetailPengujian";

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Beranda />
          </RequireAuth>
        }
      />

      <Route
        path="/pengujian"
        element={
          <RequireAuth>
            <Pengujian />
          </RequireAuth>
        }
      />

      <Route
        path="/pengujian/pendaftaran-pengujian/:noreg/pilih-metode-uji"
        element={
          <RequireAuth>
            <PilihMetodeUji />
          </RequireAuth>
        }
      />

      <Route
        path="/pengujian/pendaftaran-pengujian/:noreg/unggah-berkas"
        element={
          <RequireAuth>
            <UnggahBerkas />
          </RequireAuth>
        }
      />

      <Route
        path="/pengujian/pendaftaran-pengujian/:noreg/detail-pengujian"
        element={
          <RequireAuth>
            <DetailPengujian />
          </RequireAuth>
        }
      />

      <Route path="*" element={<MissingPage />} />
    </Routes>
  );
}
