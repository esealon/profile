import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import "./styles.css";
import Projects from "./projects/Projects";

const NavBarProjects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = () => {
    return <p>Hello</p>;
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          display: "flex",
          height: "70px",
          width: "250px",
          backgroundColor: "#D09683",
          fontFamily: "Quicksand",
          fontSize: "20px",
          "&:hover": {
            backgroundColor: "#330000",
          },
        }}
      >
        Projects
      </Button>
    </Box>
  );
};

export default NavBarProjects;
