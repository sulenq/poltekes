import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { globalTheme } from "./chakraTheme/globalTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import "./globalStyle.css";
import CustomerRoutes from "./routes/CustomerRoutes";

export const App = () => (
  <ChakraProvider theme={globalTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/customer/*" element={<CustomerRoutes />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
