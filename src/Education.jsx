import React from "react";
import { Typography } from "@mui/material";
import CenteredBox from "./CenteredBox";
import Divider from "@mui/material/Divider";
import "./styles.css";
import NavBarProjects from "./NavBarProjects";

const educationData = [
  {
    name: "Udemy",
    place: "",
    title: "The Web Developer Bootcamp 2024",
    time: "2023(Nov) – 2024(Jul)",
    info: "React.js, Material UI, HTML5, CSS3, JavaScript, Node.js, Vite, Express.js, JSX, MongoDB, API, REST, Postman, Bootstraps",
  },
  {
    name: "Tallinn University of Technology",
    place: "Tallinn, Estonia",
    title: "Master in Industrial Engineering and Management",
    time: "2016(Sep) – 2018(Jun)",
    info: "▪ Technology, programming, Industry, Management. Math and Physics",
  },
  {
    name: "Universidad de San Carlos de Guatemala",
    place: "Guatemala",
    title: "Bachelor in Industrial Engineering",
    time: "2006(Jan) – 2012(Dec)",
    info: "▪ Technology, programming, Industry, Management. Math and Physics",
  },
];

const Education = () => {
  return (
    <>
      <NavBarProjects />
      <CenteredBox>
        <h1 style={{ textAlign: "center" }}>Education</h1>
        <Divider sx={{ my: 2 }} />
        {educationData.map((educationData) => (
          <>
            <h2>{educationData.name}</h2>
            <h3>{educationData.place}</h3>
            <h3>{educationData.title}</h3>
            <h3>{educationData.time}</h3> <p>{educationData.info}</p>
            <Divider sx={{ my: 2 }} />
          </>
        ))}
      </CenteredBox>
    </>
  );
};

export default Education;
