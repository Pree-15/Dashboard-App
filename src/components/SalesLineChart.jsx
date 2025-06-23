import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useTheme } from "@mui/material";

const SalesLineChart = ({ filter }) => {
  const theme = useTheme();

  const dataSets = {
    daily: {
      xLabels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 200 + 50))
    },
    weekly: {
      xLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [120, 200, 150, 90, 180, 220, 140]
    },
    monthly: {
      xLabels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 250 + 100))
    }
  };

  const { xLabels, data } = dataSets[filter];

  return (
    <LineChart
      xAxis={[{ scaleType: "point", data: xLabels }]}
      series={[{ data, label: "Sales", color: theme.palette.secondary.main }]}
      height={280}
      margin={{ top: 10, bottom: 40, left: 60, right: 20 }}
      grid={{ vertical: true, horizontal: true }}
      tooltip={{
        trigger: "axis",
        formatter: (val) => `Sales: ₹${val[0].value.toLocaleString()}`
      }}
    />
  );
};

export default SalesLineChart;
