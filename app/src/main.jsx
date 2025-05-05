import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./pages/App/App.jsx";
import Current from "./pages/Current/Current.jsx";
import { DataProvider } from "./providers/DataProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/current" element={<Current />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </StrictMode>
);
