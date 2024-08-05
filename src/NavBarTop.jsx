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
            backgroundColor: "#f2f8f8",
            height: "50px",
            justifyContent: "center",
            boxShadow: "none",
            maxWidth: "800px",
            alignSelf: "center",
          }}
        >
          <Toolbar
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
              </Typography>
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
