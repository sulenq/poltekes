import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthJwt from "../middleware/AuthJwt";
import Beranda from "../pages/customer/Beranda";
import Pengujian from "../pages/customer/Pengujian";
import UnggahBerkas from "../pages/customer/UnggahBerkas";
import MissingPage from "../pages/MissingPage";
import PilihMetodeUji from "../pages/customer/PilihMetodeUji";

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthJwt>
            <Beranda />
          </AuthJwt>
        }
      />

      <Route
        path="/pengujian"
        element={
          <AuthJwt>
            <Pengujian />
          </AuthJwt>
        }
      />

      <Route
        path="/pengujian/pendaftaran-pengujian/:noreg/pilih-metode-uji"
        element={
          <AuthJwt>
            <PilihMetodeUji />
          </AuthJwt>
        }
      />

      <Route
        path="/pengujian/pendaftaran-pengujian/:noreg/unggah-berkas"
        element={
          <AuthJwt>
            <UnggahBerkas />
          </AuthJwt>
        }
      />

      <Route path="*" element={<MissingPage />} />
    </Routes>
  );
}
