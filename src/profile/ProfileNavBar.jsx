import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";
import Profile from "../Profile";
import { Box } from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import WorkOutlineTwoToneIcon from "@mui/icons-material/WorkOutlineTwoTone";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./styles.css";

const NavBar = ({ onButtonClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="static">
      <Toolbar style={{ margin: "0 auto", justifyContent: "space-evenly" }}>
        {!isMobile && (
          <Button color="inherit" onClick={() => onButtonClick("Profile")}>
            <Box id="NavButton">
              <HomeOutlinedIcon />
              Home
            </Box>
          </Button>
        )}
        {isMobile && (
          <Button color="inherit" onClick={() => onButtonClick("Profile")}>
            <Box id="NavButtonMobile">
              <HomeOutlinedIcon />
            </Box>
          </Button>
        )}
        {!isMobile && (
          <Button color="inherit" onClick={() => onButtonClick("Profile")}>
            <Box id="NavButton">
              <AccountBoxOutlinedIcon />
              Profile
            </Box>
          </Button>
        )}
        {isMobile && (
          <Button color="inherit" onClick={() => onButtonClick("Profile")}>
            <Box id="NavButtonMobile">
              <AccountBoxOutlinedIcon />
            </Box>
          </Button>
        )}
        {!isMobile && (
          <Button
            color="inherit"
            onClick={() => onButtonClick("WorkExperience")}
          >
            <Box id="NavButton">
              <WorkOutlineTwoToneIcon />
              Work Experience
            </Box>
          </Button>
        )}{" "}
        {isMobile && (
          <Button
            color="inherit"
            onClick={() => onButtonClick("WorkExperience")}
          >
            <Box id="NavButtonMobile">
              <WorkOutlineTwoToneIcon />
            </Box>
          </Button>
        )}
        {!isMobile && (
          <Button color="inherit" onClick={() => onButtonClick("Education")}>
            <Box id="NavButton">
              <SchoolOutlinedIcon />
              Education
            </Box>
          </Button>
        )}
        {isMobile && (
          <Button color="inherit" onClick={() => onButtonClick("Education")}>
            <Box id="NavButtonMobile">
              <SchoolOutlinedIcon />
            </Box>
          </Button>
        )}
        {!isMobile && (
          <Button color="inherit" onClick={() => onButtonClick("Languages")}>
            <Box id="NavButton">
              <PublicOutlinedIcon />
              Languages
            </Box>
          </Button>
        )}{" "}
        {isMobile && (
          <Button color="inherit" onClick={() => onButtonClick("Languages")}>
            <Box id="NavButtonMobile">
              <PublicOutlinedIcon />
            </Box>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
