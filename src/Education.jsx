import React from "react";
import { Typography } from "@mui/material";
import CenteredBox from "./CenteredBox";
import Divider from "@mui/material/Divider";
import "./styles.css";

const Education = () => {
  return (
    <CenteredBox>
      <h1 style={{ textAlign: "center" }}>Education</h1>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h3">Udemy</Typography>{" "}
      <Typography variant="h4">The Web Developer Bootcamp 2024</Typography>
      <Typography variant="h4">2023(Nov) – 2024(Jul)</Typography>{" "}
      <p style={{ textAlign: "justify" }}>
        React.js, Material UI, HTML5, CSS3, JavaScript, Node.js, Vite,
        Express.js, JSX, MongoDB, API, REST, Postman, Bootstraps
      </p>
      <br />
      <Divider sx={{ my: 2 }} />
      <Typography variant="h3">
        Tallinn University of Technology
      </Typography>{" "}
      <Typography variant="h4">Tallinn, Estonia</Typography>{" "}
      <Typography variant="h4">
        Master in Industrial Engineering and Management
      </Typography>
      <Typography variant="h4">2016(Sep) – 2018(Jun)</Typography>{" "}
      <p style={{ textAlign: "justify" }}>
        ▪ Technology, programming, Industry, Management. Math and Physics
      </p>
      <br />
      <Divider sx={{ my: 2 }} />
      <Typography variant="h3">
        Universidad de San Carlos de Guatemala
      </Typography>{" "}
      <Typography variant="h4">Guatemala</Typography>{" "}
      <Typography variant="h4">Bachelor in Industrial Engineering</Typography>
      <Typography variant="h4">2006(Jan) – 2012(Dec)</Typography>{" "}
      <p style={{ textAlign: "justify" }}>
        ▪ Technology, programming, Industry, Management. Math and Physics
      </p>
    </CenteredBox>
  );
};

export default Education;
