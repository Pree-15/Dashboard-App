import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";
import UploadProducts from "scenes/uploadProducts";
import Orders from "scenes/orders";
import DeliveryTracking from "scenes/deliveryTracking";
import Stocks from "scenes/stocks";
import Expense from "scenes/expense";
import Reviews from "scenes/reviews";
import Advertisement from "scenes/advertisement";



function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/upload-products" element={<UploadProducts />} />
                  <Route path="/orders" element={<Orders/>} />
                  <Route path="/delivery-tracking" element={<DeliveryTracking />} />
                  <Route path="/stocks" element={<Stocks />} />
                  <Route path="/expense" element={<Expense />} />
                  <Route path="/reviews-&-ratings" element={<Reviews />} />
                  <Route path="/advertisement" element={<Advertisement />} />
                </Route>
              </Routes>
        </ThemeProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
