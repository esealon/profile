import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={theme}>
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
            backgroundColor: "transparent",
            height: "70px",
            margin: "10px 0 0 0",
            justifyContent: "center",
            boxShadow: "none",
            maxWidth: "950px",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Toolbar sx={{ gap: "15px" }}>
            <Box sx={{ backgroundColor: "white", borderRadius: 2 }}>
              <a href="https://www.linkedin.com/in/sergio-alonzo-761347185/">
                <LinkedInIcon
                  sx={{
                    color: "#0077B5",
                    fontSize: "50px",
                    display: "flex",
                    alignItems: "center",
                  }}
                />
              </a>
            </Box>
            <Box className="HeaderTitle">
              <>Sergio Alonzo</>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
