import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";

const RevenuePieChart = ({ filter }) => {
  const theme = useTheme();
const sampleData = {
  week: [
    { id: "Men", label: "Men", value: 9500 },
    { id: "Women", label: "Women", value: 14500 },
    { id: "Kids", label: "Kids", value: 5200 },
  ],
  month: [
    { id: "Men", label: "Men", value: 46000 },
    { id: "Women", label: "Women", value: 69000 },
    { id: "Kids", label: "Kids", value: 21000 },
  ],
  year: [
    { id: "Men", label: "Men", value: 610000 },
    { id: "Women", label: "Women", value: 790000 },
    { id: "Kids", label: "Kids", value: 290000 },
  ],
};

  const data = sampleData[filter];

  return (
    <Box height="300px">
      <ResponsivePie
        data={data}
        margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
        innerRadius={0.2}
        padAngle={1.5}
        cornerRadius={5}
        colors={{ scheme: "oranges" }}
        arcLabelsSkipAngle={10}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.secondary.light}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 3]] }}
        tooltip={({ datum }) => {
          const value = datum.value?.toLocaleString?.() || datum.value;
          const percentage = datum.percentage != null ? `${datum.percentage.toFixed(1)}%` : "—";

          return (
            <div
              style={{
                background: "white",
                padding: "6px 10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: 13,
              }}
            >
              <strong>{datum.label}</strong>: ₹{value} ({percentage})
            </div>
          );
        }}
        valueFormat={(v) => `₹${v.toLocaleString()}`}
      />
    </Box>
  );
};

export default RevenuePieChart;
