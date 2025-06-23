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
    date: "2024-11-15",
    category: "Travel",
    subCategory: "Taxi",
    description: "Client meeting commute",
    amount: 350,
    status: "Paid"
  },
  {
    id: 2,
    date: "2024-11-18",
    category: "Office Supplies",
    subCategory: "Furniture",
    description: "New office chair",
    amount: 2450,
    status: "Unpaid"
  },
  {
    id: 3,
    date: "2024-11-20",
    category: "Food",
    subCategory: "Snacks",
    description: "Team refreshments",
    amount: 780,
    status: "Paid"
  },
  {
    id: 4,
    date: "2024-11-22",
    category: "Software",
    subCategory: "Subscription",
    description: "Adobe Photoshop license",
    amount: 1999,
    status: "Paid"
  },
  {
    id: 5,
    date: "2024-11-25",
    category: "Maintenance",
    subCategory: "Cleaning",
    description: "Monthly deep cleaning service",
    amount: 1200,
    status: "Unpaid"
  }
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
            <TableRow  sx={{ backgroundColor: theme.palette.primary.light }}>
              <TableCell>S.No</TableCell>
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
