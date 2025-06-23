import React, { useState } from "react";
import {
  Box, Typography, Paper, Button, Stack, TextField,
  Avatar, Rating, InputAdornment, useTheme, ToggleButton, ToggleButtonGroup, Pagination
} from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import SearchIcon from "@mui/icons-material/Search";
dayjs.extend(relativeTime);

const sampleReviews = [
  { id: 1, name: "Karthik", date: "2023-12-11", rating: 5, title: "Excellent quality!", content: "Really happy with the product and delivery speed.", approved: true },
  { id: 2, name: "Divya", date: "2023-12-10", rating: 3, title: "It's okay", content: "Fit was slightly off, but still wearable.", approved: false },
  { id: 3, name: "Sneha", date: "2023-12-09", rating: 4, title: "Worth the price", content: "Looks as shown in the image. Decent quality.", approved: null },
  { id: 4, name: "Manoj", date: "2023-12-08", rating: 2, title: "Disappointed", content: "Color faded after one wash.", approved: false },
  { id: 5, name: "Revathi", date: "2023-12-07", rating: 5, title: "Loved it!", content: "Great material and perfect stitching.", approved: true },
  { id: 6, name: "Arun", date: "2023-12-06", rating: 1, title: "Poor experience", content: "Received the wrong item.", approved: null }
];

const ReviewsRatings = () => {
  const [reviews, setReviews] = useState(sampleReviews);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const theme = useTheme();

  const reviewsPerPage = 4;

  const handleAction = (id, action) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, approved: action } : r
      )
    );
  };

  const handleFilterChange = (_, value) => {
    if (value !== null) {
      setStatusFilter(value);
      setPage(1);
    }
  };

  // Filtering logic
  const filteredReviews = reviews.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.content.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "approved" && r.approved === true) ||
      (statusFilter === "rejected" && r.approved === false) ||
      (statusFilter === "pending" && r.approved === null);

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const paginated = filteredReviews.slice(
    (page - 1) * reviewsPerPage,
    page * reviewsPerPage
  );

  // Background color based on status
  const getCardBgColor = (status) => {
    if (status === true) return theme.palette.primary.light;
    if (status === false) return theme.palette.primary.dark; 
    return theme.palette.background.alt; // Pending - neutral
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={2}>Reviews & Ratings</Typography>

      {/* Search + Filter */}
      <Stack direction="row" spacing={2} mb={3} flexWrap="wrap" alignItems="center">
        <TextField
          placeholder="Search by name/title/content..."
          size="small"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            )
          }}
          sx={{ minWidth: 250 }}
        />

        <ToggleButtonGroup
          value={statusFilter}
          exclusive
          onChange={handleFilterChange}
          size="small"
          color="primary"
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="approved">Approved</ToggleButton>
          <ToggleButton value="pending">Pending</ToggleButton>
          <ToggleButton value="rejected">Rejected</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      {/* Reviews */}
      <Stack spacing={2}>
        {paginated.map((review) => (
          <Paper
            key={review.id}
            elevation={1}
            sx={{
              p: 2,
              backgroundColor: getCardBgColor(review.approved),
              borderRadius: "8px",
            }}
          >
            <Stack direction="row" spacing={2}>
              <Avatar>{review.name.charAt(0)}</Avatar>
              <Box flex={1}>
                <Typography fontWeight="bold">{review.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {dayjs(review.date).format("MMMM DD, YYYY")} — {dayjs(review.date).fromNow()}
                </Typography>
                <Rating value={review.rating} readOnly precision={0.5} sx={{ my: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">{review.title}</Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  {review.content}
                </Typography>

                {/* Action Buttons */}
                {review.approved === null ? (
                  <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleAction(review.id, false)}
                    >
                      Reject
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => handleAction(review.id, true)}
                    >
                      Approve
                    </Button>
                  </Stack>
                ) : (
                  <Typography
                    align="right"
                    color={review.approved ? "success.main" : "error.main"}
                    fontWeight="bold"
                  >
                    {review.approved ? "Approved" : "Rejected"}
                  </Typography>
                )}
              </Box>
            </Stack>
          </Paper>
        ))}
        {paginated.length === 0 && (
          <Typography color="text.secondary" align="center">
            No reviews found.
          </Typography>
        )}
      </Stack>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box mt={3} display="flex" justifyContent="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={(e, val) => setPage(val)}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default ReviewsRatings;
