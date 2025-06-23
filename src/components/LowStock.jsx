import React from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Chip,
  useTheme
} from "@mui/material";

const lowStockProducts = [
  { id: 1, name: "Men Slim Jeans", category: "Men", stock: 5 },
  { id: 2, name: "Kids Cartoon Tee", category: "Kids", stock: 3 },
  { id: 3, name: "Women Palazzo", category: "Women", stock: 2 },
  { id: 4, name: "Men Shirt", category: "Men", stock: 8 }
];

const LowStock = () => {
  const theme = useTheme();

  return (
    <Box mt={1}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6" fontWeight="bold">Low Stock Products</Typography>
        
      </Box>

      <TableContainer component={Paper} sx={{ backgroundColor: theme.palette.background.alt, borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: theme.palette.primary.light }}>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Stock Left</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lowStockProducts.map((prod) => (
              <TableRow key={prod.id}>
                <TableCell>{prod.name}</TableCell>
                <TableCell>{prod.category}</TableCell>
                <TableCell>{prod.stock}</TableCell>
                <TableCell>
                  <Chip
                    label="Low Stock"
                    color="warning"
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
            {lowStockProducts.length === 0 && (
              <TableRow>
                <TableCell colSpan={4}>
                  <Typography textAlign="center" color="text.secondary">
                    No low stock items.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LowStock;
