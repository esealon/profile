import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import CenteredBox from "./CenteredBox";
import Container from "@mui/material/Container";
import NavBarProjects from "./NavBarProjects";

const Profile = () => {
  return (
    <>
    <NavBarProjects />
      <CenteredBox>
        <h1 style={{ textAlign: "center" }}>Profile</h1>
        <Divider sx={{ my: 2 }} />

        <p style={{ textAlign: "justify" }}>
          Web developer, quality assurance and project development engineer with
          9 years of experience in the tech sector in mass production companies,
          such as Contec Industrial (Guatemala), Ericsson (Estonia), CMR
          Surgical (UK) and Nokia (UK)
        </p>
        <Container maxWidth="lg">
          <Box sx={{ p: 2, mt: 2 }}>
            <Box sx={{ width: "100%", height: "auto", overflow: "hidden" }}>
              <img
                src="https://res.cloudinary.com/dvucxxtju/image/upload/v1722696515/Sergio_sc3on7.jpg"
                alt="Responsive"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Container>
      </CenteredBox>
    </>
  );
};

export default Profile;
