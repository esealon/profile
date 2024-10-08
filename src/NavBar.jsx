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
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import WorkExperience from "./Work Experience";
import Education from "./Education";
import Languages from "./languages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faUserGraduate,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const renderItems = [
  {
    title: "Home",
    text: "Home",
    icon: <FontAwesomeIcon icon={faHouse} size="lg" />,
    id: uuidv4(),
    path: "profile/",
  },
  {
    title: "Profile",
    text: "Profile",
    icon: <FontAwesomeIcon icon={faUser} size="lg" />,
    id: uuidv4(),
    path: "profile/profile",
  },
  {
    title: "Work Experience",
    text: "WorkExperience",
    icon: <FontAwesomeIcon icon={faBriefcase} size="lg" />,
    id: uuidv4(),
    path: "profile/work_experience",
  },
  {
    title: "Education",
    text: "Education",
    icon: <FontAwesomeIcon icon={faUserGraduate} size="lg" />,
    id: uuidv4(),
    path: "profile/education",
  },
  {
    title: "Languages",
    text: "Languages",
    icon: <FontAwesomeIcon icon={faGlobe} size="lg" />,
    id: uuidv4(),
    path: "profile/languages",
  },
];

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Router>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            padding: "0 20px",
          }}
        >
          <AppBar
            position="static"
            sx={{
              display: "flex",
              backgroundColor: "#73605B",
              height: "50px",
              justifyContent: "center",
              borderRadius: 2,
              maxWidth: "950px",
              padding: "40px 0",
              margin: "10px",
            }}
          >
            <Toolbar
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
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
                        <Button sx={{ minWidth: "0" }} color="inherit">
                          <Box id="NavButton">{renderItem.icon}</Box>
                        </Button>
                      )}
                    </div>
                  </Box>
                </Link>
              ))}
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="profile/" element={<Home />} />
          <Route path="profile/profile" element={<Profile />} />
          <Route path="profile/work_experience" element={<WorkExperience />} />
          <Route path="profile/education" element={<Education />} />
          <Route path="profile/languages" element={<Languages />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default NavBar;
