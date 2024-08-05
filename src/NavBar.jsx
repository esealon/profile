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
import Container from "@mui/material/Container";
import { useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import WorkExperience from "./Work Experience";
import Education from "./Education";
import Languages from "./languages";


const renderItems = [
  {
    title: "Home",
    text: "Home",
    icon: <HomeOutlinedIcon />,
    id: uuidv4(),
    path: "profile/",
  },
  {
    title: "Profile",
    text: "Profile",
    icon: <AccountBoxOutlinedIcon />,
    id: uuidv4(),
    path: "profile/profile",
  },
  {
    title: "Work Experience",
    text: "WorkExperience",
    icon: <WorkOutlineTwoToneIcon />,
    id: uuidv4(),
    path: "profile/work_experience",
  },
  {
    title: "Education",
    text: "Education",
    icon: <SchoolOutlinedIcon />,
    id: uuidv4(),
    path: "profile/education",
  },
  {
    title: "Languages",
    text: "Languages",
    icon: <PublicOutlinedIcon />,
    id: uuidv4(),
    path: "profile/languages",
  },
];

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#6e6e6b",
            height: "50px",
            justifyContent: "center",
            borderRadius: "16px",
            maxWidth: "750px",
            alignSelf: "center",
          }}
        >
          <Container maxWidth="md">
            <Toolbar
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              {renderItems.map((renderItem) => (
                <Link
                  key={renderItem.id}
                  to={renderItem.path}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Box sx={{}}>
                    <div>
                      {!isMobile && (
                        <Button sx={{}} color="inherit">
                          <Box id="NavButton">
                            {renderItem.icon}
                            {renderItem.title}
                          </Box>
                        </Button>
                      )}
                      {isMobile && (
                        <Button color="inherit">
                          <Box id="NavButton">{renderItem.icon}</Box>
                        </Button>
                      )}
                    </div>
                  </Box>
                </Link>
              ))}
            </Toolbar>
          </Container>
        </AppBar>

        <Routes>
          <Route path="profile/" element={<Home />} />
          <Route path="profile/profile" element={<Profile />} />
          <Route path="profile/work_experience" element={<WorkExperience />} />
          <Route path="profile/education" element={<Education />} />
          <Route path="profile/languages" element={<Languages />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default NavBar;
