import React, { useState } from "react";
import NavBar from "./NavBar";
import NavBarTop from "./NavBarTop";
import Footer from "./footer";
import { Container } from "@mui/material";


function App() {
  return (
    <>
      <Container sx={{ minHeight: "92vh" }}>
        <NavBarTop />
        <NavBar />
      </Container>
      <Footer />
    </>
  );
}

export default App;
