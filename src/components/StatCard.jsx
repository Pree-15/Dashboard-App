// components/StatCard.jsx
import React from "react";
import { Card, CardContent, Typography, Stack, Avatar, useTheme } from "@mui/material";
import { ChildCare, ShoppingBag } from "@mui/icons-material";
import { GiLargeDress } from "react-icons/gi";
import { PiShirtFoldedFill } from "react-icons/pi";

const iconMap = {
  Mens: <PiShirtFoldedFill />,
  Womens:<GiLargeDress />,
  Kids: <ChildCare />,
  Accessories: <ShoppingBag />,
};

const StatCard = ({ title, value }) => {
    const theme = useTheme();
  return (
    <Card sx={{ p: 2, backgroundColor: theme.palette.background.alt, borderRadius: "8px"}}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{backgroundColor: theme.palette.secondary.light}}>
            {iconMap[title] || <PiShirtFoldedFill />}
          </Avatar >
          <div>
            <Typography variant="subtitle2" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              {value}
            </Typography>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StatCard;
