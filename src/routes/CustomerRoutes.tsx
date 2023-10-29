import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthJwt from "../middleware/AuthJwt";
import Home from "../pages/customer/Home";
import Pengujian from "../pages/customer/Pengujian";
import PendaftaranPengujian from "../pages/customer/PendaftaranPengujian";

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthJwt>
            <Home />
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
        path="/pendaftaran-pengujian"
        element={
          <AuthJwt>
            <PendaftaranPengujian />
          </AuthJwt>
        }
      />
    </Routes>
  );
}
