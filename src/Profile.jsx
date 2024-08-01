import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

import CenteredBox from "./CenteredBox";

const Profile = () => {
  return (
    <>
      <CenteredBox>
      <h1 style={{textAlign: "center"}}>Profile</h1>
      <Divider sx={{ my: 2 }} />
        <p style={{ textAlign: "justify" }}>
          Wed developer, quality assurance and project development engineer with
          9 years of experience in the tech sector in mass production companies,
          such as Contec Industrial (Guatemala), Ericsson (Estonia), CMR
          Surgical (UK) and Nokia (UK).
        </p>
      </CenteredBox>
    </>
  );
};

export default Profile;
