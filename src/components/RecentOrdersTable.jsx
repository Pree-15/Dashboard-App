import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Chip,
  Pagination,
  useTheme,
  Button
} from "@mui/material";
import {Link} from "react-router-dom";

const sampleOrders = [
  { id: "001", customer: "Ramesh", date: "2024-06-20", product: "Cotton Shirt", amount: 350, status: "Pending" },
  { id: "002", customer: "Suresh", date: "2024-06-19", product: "Denim Jeans", amount: 700, status: "Dispatched" },
  { id: "003", customer: "Priya", date: "2024-06-18", product: "Floral Dress", amount: 500, status: "Cancelled" },
  { id: "004", customer: "Ankit", date: "2024-06-17", product: "Shoes", amount: 1200, status: "Dispatched" },
  { id: "005", customer: "Kavya", date: "2024-06-16", product: "Sunglasses", amount: 950, status: "Pending" },
  { id: "006", customer: "Rahul", date: "2024-06-15", product: "Hat", amount: 220, status: "Cancelled" },
];

const getStatusColor = (status) => {
  if (status === "Pending") return "warning";
  if (status === "Dispatched") return "success";
  if (status === "Cancelled") return "error";
  return "default";
};

const RecentOrdersTable = () => {
  const theme = useTheme();
  const rowsPerPage = 5;
  const [page, setPage] = useState(1);

  const paginated = sampleOrders.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  const totalPages = Math.ceil(sampleOrders.length / rowsPerPage);

  return (
    <Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h6" fontWeight="bold">Recent Orders</Typography>
          <Button component={Link} to="/orders" variant="outlined" color="secondary" size="small">
            View All
          </Button>
        </Box>

        <TableContainer component={Paper} elevation={0} 
        sx={{ backgroundColor: theme.palette.background.alt, borderRadius: "8px" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: theme.palette.primary.light }}>
                <TableCell sx={{ color: theme.palette.primary.contrastText }}>Order ID</TableCell>
                <TableCell sx={{ color: theme.palette.primary.contrastText }}>Customer</TableCell>
                <TableCell sx={{ color: theme.palette.primary.contrastText }}>Date</TableCell>
                <TableCell sx={{ color: theme.palette.primary.contrastText }}>Product</TableCell>
                <TableCell sx={{ color: theme.palette.primary.contrastText }}>Amount</TableCell>
                <TableCell sx={{ color: theme.palette.primary.contrastText }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginated.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>₹{order.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Chip
                      label={order.status}
                      size="small"
                      color={getStatusColor(order.status)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box display="flex" justifyContent="center" mt={2}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(e, val) => setPage(val)}
            size="small"
            color="primary"
          />
        </Box>
      </Box>
    
  );
};

export default RecentOrdersTable;
