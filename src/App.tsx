import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { globalTheme } from "./chakraTheme/globalTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

export const App = () => (
  <ChakraProvider theme={globalTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
