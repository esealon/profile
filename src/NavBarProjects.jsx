import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";

import "./styles.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const NavBarProjects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Button
        variant="contained"
        sx={{
          display: "flex",
          height: "70px",
          width: "250px",
          backgroundColor: "#D09683",
          fontFamily: "Quicksand",
          fontSize:"20px"
        }}
      >
        Projects
      </Button>
    </Box>
  );
};

export default NavBarProjects;
