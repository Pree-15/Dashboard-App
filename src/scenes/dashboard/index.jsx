import React, { useState } from "react";
import {
  Box, Typography, Grid, Select, MenuItem, Card, CardContent, FormControl, useTheme
} from "@mui/material";
import StatCard from "../../components/StatCard";
import SalesLineChart from "../../components/SalesLineChart";
import RevenuePieChart from "../../components/RevenuePieChart";
import RecentOrdersTable from "../../components/RecentOrdersTable";
import LowStock from "../../components/LowStock";
import RecentExpensesTable from "../../components/RecentExpensesTable";


const Dashboard = () => {
  const theme = useTheme();
  const [salesFilter, setSalesFilter] = useState("weekly");
  const [revenueFilter, setRevenueFilter] = useState("week");


  const stats = [
    { title: "Mens", value: 500 },
    { title: "Womens", value: 660 },
    { title: "Kids", value: 400 },
    { title: "Accessories", value: 250 },
  ];

  return (
    <Box p={3}>
      <Typography variant="h4" mb={2}>Dashboard</Typography>

      

      <Grid container spacing={3} mt={2}>
        <Grid container spacing={2} size={30} >
        {stats.map((stat) => (
          <Grid item xs={12} size="grow" key={stat.title}>
            <StatCard title={stat.title} value={stat.value} />
          </Grid>
        ))}
      </Grid>
        {/* Sales Chart */}
        <Grid item xs={12} md={6} size={8}>
          <Card sx={{ backgroundColor: theme.palette.background.alt, borderRadius: 2 }} fullWidth>
            <CardContent >
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6">Sales Overview</Typography>
                <FormControl size="small">
                  <Select
                    value={salesFilter}
                    onChange={(e) => setSalesFilter(e.target.value)}
                    sx={{ minWidth: 120 }}
                  >
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                    <MenuItem value="monthly">Monthly</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <SalesLineChart filter={salesFilter} />
            </CardContent>
          </Card>
        </Grid>

        {/* Revenue Pie */}
        <Grid item xs={12} md={6} size={4}>
          <Card sx={{ backgroundColor: theme.palette.background.alt, borderRadius: 2 }} fullWidth>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6">Revenue</Typography>
                <FormControl size="small">
                  <Select
                    value={revenueFilter}
                    onChange={(e) => setRevenueFilter(e.target.value)}
                    sx={{ minWidth: 120 }}
                  >
                    <MenuItem value="week">Week</MenuItem>
                    <MenuItem value="month">Month</MenuItem>
                    <MenuItem value="year">Year</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <RevenuePieChart filter={revenueFilter} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} size={8}>
          <RecentOrdersTable />
        </Grid>
        <Grid item xs={12} md={6} size={4}>
          <LowStock />
        </Grid>
        <Grid item size={12}>
          <RecentExpensesTable />
        </Grid>
      </Grid>
      
    </Box>
  );
};

export default Dashboard;
