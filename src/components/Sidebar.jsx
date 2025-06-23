import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRightOutlined from "@mui/icons-material/ChevronRightOutlined";

import { useLocation, useNavigate } from "react-router-dom";
// import FlexBetween from "components/FlexBetween";
// import profileImage from "assets/profile.jpg";

const navItems = [
  { text: "Dashboard", icon: <HomeOutlined /> },
  { text: "Upload Products", icon: <CategoryOutlinedIcon /> },
  { text: "Orders", icon: <ShoppingCartOutlined /> },
  { text: "Delivery Tracking", icon: <LocalShippingOutlinedIcon /> },
  { text: "Stocks", icon: <Inventory2OutlinedIcon /> },
  { text: "Expense", icon: <ReceiptOutlinedIcon /> },
  { text: "Reviews & Ratings", icon: <RateReviewOutlinedIcon /> },
  { text: "Advertisement", icon: <CampaignOutlinedIcon /> },
];

const Sidebar = ({ drawerWidth, isSidebarOpen, setIsSidebarOpen, isNonMobile }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          {/* Top Logo */}
          <Box m="1.5rem 2rem 2rem 3rem" display="flex" justifyContent="space-between" alignItems="center">
            <Typography
              variant="h1"
              fontWeight="bold"
              color={theme.palette.secondary.main}
            >
              .cloths
            </Typography>
            {!isNonMobile && (
              <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <ChevronLeft />
              </IconButton>
            )}
          </Box>

          {/* Navigation Items */}
          <List>
            {navItems.map(({ text, icon }) => {
              const lcText = text.toLowerCase().replace(/\s+/g, "-");

              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(`/${lcText}`);
                      setActive(lcText);
                    }}
                    sx={{
                      backgroundColor: active === lcText ? theme.palette.secondary[300] : "transparent",
                      color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[100],
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        ml: "2rem",
                        color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[200],
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    {active === lcText && (
                      <ChevronRightOutlined sx={{ ml: "auto" }} />
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          {/* Logout */}
          <Box flexGrow={1} />
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/login");
                  setActive("log out");
                }}
                sx={{
                  mt: "2rem",
                  color: active === "log out"
                    ? theme.palette.primary[600]
                    : theme.palette.secondary[100],
                }}
              >
                <ListItemIcon
                  sx={{
                    ml: "2rem",
                    color: active === "log out"
                      ? theme.palette.primary[600]
                      : theme.palette.secondary[200],
                  }}
                >
                  <LogoutOutlined />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;