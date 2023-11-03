import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { globalTheme } from "./chakraTheme/globalTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import "./globalStyle.css";
import CustomerRoutes from "./routes/CustomerRoutes";
import MissingPage from "./pages/MissingPage";

export const App = () => (
  <ChakraProvider theme={globalTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:action" element={<Landing />} />

        <Route path="/customer/*" element={<CustomerRoutes />} />

        <Route path="*" element={<MissingPage />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
