import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";

import { Box } from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import WorkOutlineTwoToneIcon from "@mui/icons-material/WorkOutlineTwoTone";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./styles.css";

import { v4 as uuidv4 } from "uuid";

const renderItems = [
  { title: "Home", text: "Profile", icon: <HomeOutlinedIcon />, id: uuidv4() },
  {
    title: "Profile",
    text: "Profile",
    icon: <AccountBoxOutlinedIcon />,
    id: uuidv4(),
  },
  {
    title: "Work Experience",
    text: "WorkExperience",
    icon: <WorkOutlineTwoToneIcon />,
    id: uuidv4(),
  },
  {
    title: "Education",
    text: "Education",
    icon: <SchoolOutlinedIcon />,
    id: uuidv4(),
  },
  {
    title: "Languages",
    text: "Languages",
    icon: <PublicOutlinedIcon />,
    id: uuidv4(),
  },
];

const NavBar = ({ onButtonClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="static" sx={{}}>
      <Toolbar sx={{ maxWidth: "1000px" }}>
        {renderItems.map((renderItem) => (
          <Box
            sx={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div key={renderItem.id}>
              {!isMobile && (
                <Button
                  sx={{}}
                  color="inherit"
                  onClick={() => onButtonClick(renderItem.text)}
                >
                  <Box id="NavButton">
                    {renderItem.icon}
                    {renderItem.title}
                  </Box>
                </Button>
              )}
              {isMobile && (
                <Button
                  color="inherit"
                  onClick={() => onButtonClick(renderItem.text)}
                >
                  <Box id="NavButton">{renderItem.icon}</Box>
                </Button>
              )}
            </div>
          </Box>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
