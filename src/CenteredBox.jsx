import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

const CenteredBox = ({ children, ...props }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        padding: "20px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 700,
          padding: 3,
          backgroundColor: "white",
          maxWidth: 1200, // Maximum width of the Paper
          borderRadius: 2, // Rounded corners
          padding: "0 24px 24px 24px",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};
export default CenteredBox;
