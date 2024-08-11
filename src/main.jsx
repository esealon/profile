import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createTheme({
  // Customize your theme here if needed
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
   
    <React.StrictMode>
   
      <App />
     
    </React.StrictMode>
    
  </ThemeProvider>,
  
);
