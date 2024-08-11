import React from "react";
import { Typography } from "@mui/material";
import CenteredBox from "./CenteredBox";
import Divider from "@mui/material/Divider";
import { v4 as uuidv4 } from "uuid";
import NavBarProjects from "./NavBarProjects";

const workData = [
  {
    company: "Frelance",
    location: "",
    title: "Web Developer Engineer",
    time: "2022 (Aug) - present",
    info: "Vite+React.js, Material UI, HTML5, CSS3, JavaScript, Node.js, Vite, Express.js, JSX, MongoDB, API, REST, Postman, Bootstraps",
    responsible: "",
    objectives: "",
    responsible: "",
    objectives: "",
    id: "uuidv4",
  },
  {
    company: "Alcatel Submarine Networks",
    location: "London, UK.",
    title: "Supplier Quality Management Engineer",
    time: "2023 (Sep) - present",
    info: "Quality control/improvement of SLTE & Power Feed components for fiber optical cables (8D, RCA) Auditing suppliers on their manufacturing sites in countries such as China, USA, Japan, UK, France.",
    responsible: "",
    objectives: "",
    responsible: "",
    objectives: "",
    id: "uuidv4",
  },
  {
    company: "CMR Surgical",
    location: "Cambridge, UK",
    title: "Supplier Engineer",
    time: "2023 (Jan) - 2023 (Aug)",
    info: "Quality control/improvement of electronic components and joints for surgical robots (8D, RCA)",
    responsible: "",
    objectives: "",
    responsible: "",
    objectives: "",
    id: "uuidv4",
  },
  {
    company: "Ericsson",
    location: "Tallinn, Estonia",
    title: "Production Technology Development Engineer and Process Owner",
    time: "2020 (Oct) - 2022 (Aug)",
    info: "",
    responsible:
      "Constant improvement of processes and implementation of new technologies inside Ericsson production, using Lean methodologies (DMAIC, IDDOV).",
    objectives: [
      "▪ Successfully achieved the integration of collaborative robot (UR10) with glue cartages process into production with a yield of 95%",
      "▪ Successfully achieved the implementation of 2 glue processes on the same assembly station using the same collaborative robot (UR10) with little effort for operator for the changeover.",
      "▪ Savings of 72% yearly (˷27,000.00 GBP) because of improvement of assembly quality of electronic components on the surface mounting assembly process",
      "▪ Savings of 64% yearly (˷18,000.00 GBP) because of improvement of application of thermal grease due to proper stencils cleaning process implementation.",
      "▪ Latest project business case finished with a projection of savings of 300,000.00 GBP yearly due to reduction of human error such as incorrect assembly components made by operator",
    ],
    id: "uuidv4",
  },
  {
    company: "Ericsson",
    location: "Tallinn, Estonia",
    title: "Supplier Quality Lead Engineer",
    time: "2017(May) - 2021(May)",
    info: "",
    responsible:
      "Approval of suppliers and products for Ericsson’s mass production (Six Sigma Yellow Belt certificate)",
    objectives: [
      "▪ Successfully approval of more than 200 Ericsson products on the NPI phase (APQP, PPAP)",
      "▪ Successfully audited suppliers in more than 10 factories in countries such as China, Hungary, Poland.",
      "▪ Successfully approved improvement quality project for radio products",
    ],
    id: "uuidv4",
  },
  {
    company: "Contec Industrial",
    location: "Guatemala",
    title: "Project Manager",
    time: "2014 (May) - 2016 (July)",
    info: "",
    responsible:
      "Technical, logistic and quotation of machinery projects from Germany to Guatemala, The Caribbean and Latin America",
    objectives: [
      " ▪ Successfully developed more than 20 mechanical machinery product projects for customers in Latin America and the Caribbeans, incurring on sales of more than 200,000.00 GBP/yearly",
    ],
    id: "uuidv4",
  },
];

const WorkExperience = () => {
  return (
    <>
      <NavBarProjects />
      <CenteredBox>
        <h1 style={{ textAlign: "center" }}>Work Experience</h1>
        <Divider sx={{ my: 2 }} />
        {workData.map((workData) => (
          <div>
            <h2>{workData.company}</h2>
            <h3>{workData.location}</h3>
            <h3>{workData.title}</h3>
            <h3>{workData.time}</h3>{" "}
            <>
              {workData.info ? (
                <p style={{ textAlign: "justify" }}>{workData.info}</p>
              ) : (
                <div key={workData.id}>
                  <br />
                  <h3 sx={{ fontWeight: "bold" }}>Responsible for:</h3>
                  <p>{workData.responsible}</p>
                  <br />
                  <h3 sx={{ fontWeight: "bold" }}>Key Achievements:</h3>
                  {workData.objectives.map((line, index) => (
                    <p>{line}</p>
                  ))}
                </div>
              )}
            </>
            <Divider sx={{ my: 2 }} />
          </div>
        ))}
      </CenteredBox>
    </>
  );
};

export default WorkExperience;
