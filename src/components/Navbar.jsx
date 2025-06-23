import React, { useState } from 'react';
import {
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from '@mui/icons-material';
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
  Typography,
  Menu,
  MenuItem,
  Avatar
} from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import profileImage from 'assets/profile.jpg';

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <FlexBetween width="100%">
          {/* LEFT SIDE */}
          <FlexBetween>
            <IconButton onClick={() => setIsSidebarOpen((prev) => !prev)}>
              <MenuIcon />
            </IconButton>
            <FlexBetween
              backgroundColor={theme.palette.background.alt}
              borderRadius="9px"
              gap="3rem"
              p="0.1rem 1.5rem"
            >
              <InputBase placeholder="Search..." />
              <IconButton>
                <Search />
              </IconButton>
            </FlexBetween>
          </FlexBetween>

          {/* RIGHT SIDE */}
          <FlexBetween gap="1.5rem">
            <IconButton>
              <SettingsOutlined sx={{ fontSize: "25px" }} />
            </IconButton>

            {/* User Dropdown */}
            <FlexBetween onClick={handleClick} sx={{ cursor: "pointer" }}>
              <Avatar alt="profile" src={profileImage} sx={{ width: 32, height: 32, mr: 1 }} />
              <Typography variant="subtitle2" color="text.primary">
                {user?.name || "Admin"}
              </Typography>
              <ArrowDropDownOutlined />
            </FlexBetween>

            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
