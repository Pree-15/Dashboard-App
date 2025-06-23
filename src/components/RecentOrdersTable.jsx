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
  { id: "007", customer: "Neha", date: "2024-06-21", product: "Leather Jacket", amount: 1800, status: "Pending" },
  { id: "008", customer: "Amit", date: "2024-06-20", product: "Sneakers", amount: 1500, status: "Delivered" },
  { id: "009", customer: "Divya", date: "2024-06-19", product: "Handbag", amount: 950, status: "Dispatched" },
  { id: "010", customer: "Vikram", date: "2024-06-18", product: "Casual T-Shirt", amount: 450, status: "Cancelled" },
  { id: "011", customer: "Sneha", date: "2024-06-17", product: "Jeans Shorts", amount: 650, status: "Delivered" },
  { id: "012", customer: "Manoj", date: "2024-06-16", product: "Sports Watch", amount: 2100, status: "Pending" }
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
              <TableRow  sx={{ backgroundColor: theme.palette.primary.light }}>
                <TableCell sx={{ color: theme.palette.primary }}>Customer</TableCell>
                <TableCell sx={{ color: theme.palette.primary }}>Order ID</TableCell>
                <TableCell sx={{ color: theme.palette.primary }}>Date</TableCell>
                <TableCell sx={{ color: theme.palette.primary }}>Product</TableCell>
                <TableCell sx={{ color: theme.palette.primary}}>Amount</TableCell>
                <TableCell sx={{ color: theme.palette.primary }}>Status</TableCell>
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
