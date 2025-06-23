import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { themeSettings } from "theme";

// Pages
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
  // Create theme once, since it's always light mode
  const theme = createTheme(themeSettings);

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
              <Route path="/orders" element={<Orders />} />
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