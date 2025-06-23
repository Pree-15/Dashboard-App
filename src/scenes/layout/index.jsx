import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const drawerWidth = "250px";

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      
      {/* Sidebar */}
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth={drawerWidth}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        user={{ name: "Nityananda", occupation: "Admin" }}
      />

      {/* Main Content Area */}
      <Box
        flexGrow={1}
        p="1rem"
        sx={{
          width: isNonMobile ? `calc(100% - ${drawerWidth})` : "100%",
        }}
      >
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;