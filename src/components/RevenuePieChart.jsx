import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";

const RevenuePieChart = ({ filter }) => {
  const theme = useTheme();

  const sampleData = {
    week: [
      { id: "Men", label: "Men", value: 12000 },
      { id: "Women", label: "Women", value: 18000 },
      { id: "Kids", label: "Kids", value: 7000 },
    ],
    month: [
      { id: "Men", label: "Men", value: 55000 },
      { id: "Women", label: "Women", value: 75000 },
      { id: "Kids", label: "Kids", value: 27000 },
    ],
    year: [
      { id: "Men", label: "Men", value: 670000 },
      { id: "Women", label: "Women", value: 880000 },
      { id: "Kids", label: "Kids", value: 320000 },
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
        colors={{ scheme: "blues" }}
        arcLabelsSkipAngle={10}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.secondary.light}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
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
