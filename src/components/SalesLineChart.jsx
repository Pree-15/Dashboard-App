import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useTheme } from "@mui/material";

const SalesLineChart = ({ filter }) => {
  const theme = useTheme();
const dataSets = {
  daily: {
    xLabels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 150 + 80)) // Range: 80–230
  },
  weekly: {
    xLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [160, 190, 130, 170, 210, 250, 190]
  },
  monthly: {
    xLabels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 300 + 150)) // Range: 150–450
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
