import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import App from './pages/App/App.jsx'
import Current from './pages/Current/Current.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/current" element={<Current />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
