import React from "react";
import {
  TableContainer,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Box,
  Button,
  useTheme
} from "@mui/material";
import dayjs from "dayjs";
import {Link} from "react-router-dom";

const sampleExpenses = [
  {
    id: 1,
    date: "2024-12-01",
    category: "Utilities",
    subCategory: "Electricity",
    description: "Office power bill",
    amount: 1250,
    status: "Paid"
  },
  {
    id: 2,
    date: "2024-12-03",
    category: "Internet",
    subCategory: "WiFi",
    description: "Fiber internet",
    amount: 999,
    status: "Paid"
  },
  {
    id: 3,
    date: "2024-12-05",
    category: "Stationery",
    subCategory: "Print",
    description: "Flyers printing",
    amount: 600,
    status: "Unpaid"
  },
];

const RecentExpensesTable = () => {
  const theme = useTheme();

  return (
    <Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h6" fontWeight="bold">Recent Expenses</Typography>
          <Button size="small" component={Link} to="/expense" variant="outlined" color="secondary">View All</Button>
        </Box>

        <TableContainer component={Paper} elevation={0} 
        sx={{ backgroundColor: theme.palette.background.alt, borderRadius: "8px" }}>
          <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleExpenses.map((exp, index) => (
              <TableRow key={exp.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{dayjs(exp.date).format("DD MMM YYYY")}</TableCell>
                <TableCell>{`${exp.category} / ${exp.subCategory}`}</TableCell>
                <TableCell>{exp.description}</TableCell>
                <TableCell>₹{exp.amount.toLocaleString()}</TableCell>
                <TableCell>
                  <Chip
                    label={exp.status}
                    size="small"
                    color={exp.status === "Paid" ? "success" : "error"}
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
            ))}
            {sampleExpenses.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">No recent expenses found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        </TableContainer>
        </Box>
    
  );
};

export default RecentExpensesTable;
