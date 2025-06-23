import React, { useState } from "react";
import {
  Box, Typography, Table, TableHead, TableRow, TableCell, TableBody,
  TableContainer, Paper, Button, Chip, TextField, Pagination, InputAdornment,
  MenuItem, Select, InputLabel, FormControl, Dialog, DialogTitle,
  DialogContent, DialogActions
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from "@mui/material/styles";

const initialData = [
{ id: 1, date: "07/12/2023", name: "Ramesh", contact: "99999 88888", product: "Printed Shirt", location: "Coimbatore", status: "Delivered", trackingId: "" },
  { id: 2, date: "07/12/2023", name: "Naveen", contact: "99999 77777", product: "Kurthi", location: "Erode", status: "Out for Delivery", trackingId: "" },
  { id: 3, date: "07/12/2023", name: "Sherin", contact: "99999 66666", product: "Sports Shorts", location: "Chennai", status: "Pending", trackingId: "" },
  { id: 4, date: "08/12/2023", name: "Ajith", contact: "99999 55555", product: "Formal Pants", location: "Madurai", status: "Cancelled", trackingId: "" },
  { id: 5, date: "08/12/2023", name: "Gokul", contact: "99999 44444", product: "Round Neck T-Shirt", location: "Salem", status: "Delivered", trackingId: "" },
  { id: 6, date: "09/12/2023", name: "Meena", contact: "99999 33333", product: "Cotton Saree", location: "Tiruppur", status: "Out for Delivery", trackingId: "" },
  { id: 7, date: "09/12/2023", name: "Akash", contact: "99999 22222", product: "Plain Shirt", location: "Trichy", status: "Pending", trackingId: "" },
  { id: 8, date: "09/12/2023", name: "Tharani", contact: "99999 11111", product: "Blouse", location: "Tanjore", status: "Delivered", trackingId: "" },
  { id: 9, date: "10/12/2023", name: "Vijay", contact: "99998 12345", product: "Track Pants", location: "Vellore", status: "Cancelled", trackingId: "" },
  { id: 10, date: "10/12/2023", name: "Lavanya", contact: "99998 54321", product: "Anarkali Kurti", location: "Kanchipuram", status: "Delivered", trackingId: "" },
  { id: 11, date: "11/12/2023", name: "Hari", contact: "99998 00000", product: "Printed T-Shirt", location: "Tirunelveli", status: "Out for Delivery", trackingId: "" },
  { id: 12, date: "11/12/2023", name: "Divya", contact: "99997 11111", product: "Hand Kerchief", location: "Namakkal", status: "Pending", trackingId: "" },
  { id: 13, date: "12/12/2023", name: "Raj", contact: "99997 22222", product: "Sweatshirt", location: "Dharmapuri", status: "Delivered", trackingId: "" },
  { id: 14, date: "12/12/2023", name: "Kavi", contact: "99997 33333", product: "Leggings", location: "Karur", status: "Out for Delivery", trackingId: "" },
  { id: 15, date: "13/12/2023", name: "Arun", contact: "99996 44444", product: "Hoodie", location: "Perambalur", status: "Cancelled", trackingId: "" },
  { id: 16, date: "13/12/2023", name: "Bhavana", contact: "99996 55555", product: "Jeans", location: "Tiruvannamalai", status: "Delivered", trackingId: "" },
  { id: 17, date: "14/12/2023", name: "Lokesh", contact: "99996 66666", product: "Polo T-Shirt", location: "Cuddalore", status: "Out for Delivery", trackingId: "" },
  { id: 18, date: "14/12/2023", name: "Janani", contact: "99996 77777", product: "Churidar", location: "Sivakasi", status: "Pending", trackingId: "" },
  { id: 19, date: "15/12/2023", name: "Vasanth", contact: "99996 88888", product: "Jacket", location: "Pudukkottai", status: "Cancelled", trackingId: "" },
  { id: 20, date: "15/12/2023", name: "Rekha", contact: "99996 99999", product: "Skirt", location: "Theni", status: "Delivered", trackingId: "" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered": return "success";
    case "Out for Delivery": return "warning";
    case "Pending": return "default";
    case "Cancelled": return "error";
    default: return "default";
  }
};

const categories = ["All", "Delivered", "Out for Delivery", "Pending", "Cancelled"];

const DeliveryTracking = () => {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const theme = useTheme();

  // Track Dialog State
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [trackingId, setTrackingId] = useState("");

  const handleOpenDialog = (order) => {
    setSelectedOrder(order);
    setTrackingId(order.trackingId || "");
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedOrder(null);
    setTrackingId("");
  };

  const handleSaveTrackingId = () => {
    if (!selectedOrder) return;

    const updatedData = data.map((item) =>
      item.id === selectedOrder.id ? { ...item, trackingId } : item
    );
    setData(updatedData);
    handleCloseDialog();
  };

  const filteredData = data.filter((item) =>
    (category === "All" || item.status === category) &&
    item.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  return (
    <Box m={4}>
      <Typography variant="h4" mb={3}>Delivery Tracking</Typography>

      {/* Filters */}
      <Box mb={3} display="flex" justifyContent="flex-end" gap={2} flexWrap="wrap">
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
          >
            {categories.map((c) => (
              <MenuItem key={c} value={c}>{c}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          size="small"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ backgroundColor: theme.palette.background.alt, borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: theme.palette.primary.light }}>
              <TableCell>Sl. No</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{startIndex + index + 1}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.contact}</TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>
                  <Chip label={row.status} color={getStatusColor(row.status)} />
                </TableCell>
                <TableCell>
                  <Button variant="contained" size="small" onClick={() => handleOpenDialog(row)}>
                    Track
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {paginatedData.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} align="center">No matching records found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination count={totalPages} page={page} onChange={(e, val) => setPage(val)} />
      </Box>

      {/* Track Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="xs"
        fullWidth
       
      >
        <DialogTitle>Enter Tracking ID</DialogTitle>
        <DialogContent>
          <Typography mb={1}>
            For: <strong>{selectedOrder?.product}</strong> — {selectedOrder?.name}
          </Typography>
          <TextField
            fullWidth
            label="Tracking ID"
            size="small"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="error">Cancel</Button>
          <Button variant="contained" color="secondary" onClick={handleSaveTrackingId}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DeliveryTracking;