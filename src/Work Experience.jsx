import React from "react";
import { Typography } from "@mui/material";
import CenteredBox from "./CenteredBox";
import Divider from "@mui/material/Divider";

const WorkExperience = () => {
  return (
    <CenteredBox>
      <h1 style={{ textAlign: "center" }}>Work Experience</h1>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h3">Freelance</Typography>
      <Typography variant="h4">Web Developer Engineer</Typography>
      <Typography variant="h4">2022 (Aug) - present</Typography>{" "}
      <p style={{ textAlign: "justify" }}>
        React.js, Material UI, HTML5, CSS3, JavaScript, Node.js, Vite,
        Express.js, JSX, MongoDB, API, REST, Postman, Bootstraps
      </p>
      <br />
      <Divider sx={{ my: 2 }} />
      <Typography variant="h3">
        Alcatel Submarine Networks (Nokia group)
      </Typography>{" "}
      <Typography variant="h4">London, UK.</Typography>{" "}
      <Typography variant="h4">Supplier Quality Management Engineer</Typography>
      <Typography variant="h4">2023 (Sep) - present</Typography>{" "}
      <p style={{ textAlign: "justify" }}>
        Quality control/improvement of SLTE & Power Feed components for fiber
        optical cables (8D, RCA) Auditing suppliers on their manufacturing sites
        in countries such as China, USA, Japan, UK, France.
      </p>
      <br />
      <Divider sx={{ my: 2 }} />
      <Typography variant="h3">CMR Surgical</Typography>{" "}
      <Typography variant="h4">Cambridge, UK</Typography>{" "}
      <Typography variant="h4">Supplier Engineer</Typography>
      <Typography variant="h4">2023 (Jan) - 2023 (Aug)</Typography>{" "}
      <p style={{ textAlign: "justify" }}>
        Quality control/improvement of electronic components and joints for
        surgical robots (8D, RCA)
      </p>
      <br />
      <Divider sx={{ my: 2 }} />
      <Typography variant="h3">Ericsson</Typography>{" "}
      <Typography variant="h4">Tallinn, Estonia</Typography>{" "}
      <Typography variant="h4">
        Production Technology Development Engineer and Process Owner{" "}
      </Typography>
      <Typography variant="h4">2020 (Oct) - 2022 (Aug)</Typography> <br />
      <Typography sx={{ fontWeight: "bold" }}>Responsible for:</Typography>
      <p style={{ textAlign: "justify" }}>
        Constant improvement of processes and implementation of new technologies
        inside Ericsson production, using Lean methodologies (DMAIC, IDDOV).
      </p>
      <br />
      <p sx={{ fontWeight: "bold" }}>Key achievements:</p>
      <Typography style={{ textAlign: "justify" }}>
        ▪ Successfully achieved the integration of collaborative robot (UR10)
        with glue cartages process into production with a yield of 95%
      </Typography>
      <Typography style={{ textAlign: "justify" }}>
        ▪ Successfully achieved the implementation of 2 glue processes on the
        same assembly station using the same collaborative robot (UR10) with
        little effort for operator for the changeover.
      </Typography>
      <Typography style={{ textAlign: "justify" }}>
        ▪ Savings of 72% yearly (˷27,000.00 GBP) because of improvement of
        assembly quality of electronic components on the surface mounting
        assembly process
      </Typography>
      <Typography style={{ textAlign: "justify" }}>
        ▪ Savings of 64% yearly (˷18,000.00 GBP) because of improvement of
        application of thermal grease due to proper stencils cleaning process
        implementation.
      </Typography>
      <Typography style={{ textAlign: "justify" }}>
        ▪ Latest project business case finished with a projection of savings of
        300,000.00 GBP yearly due to reduction of human error such as incorrect
        assembly components made by operator.
      </Typography>
      <br />
      <Divider sx={{ my: 2 }} />
      <Typography variant="h3">Ericsson</Typography>{" "}
      <Typography variant="h4">Tallinn, Estonia</Typography>{" "}
      <Typography variant="h4">Supplier Quality Lead Engineer </Typography>
      <Typography variant="h4">2017(May) - 2021(May)</Typography> <br />
      <Typography sx={{ fontWeight: "bold" }}>Responsible for:</Typography>
      <Typography style={{ textAlign: "justify" }}>
        Approval of suppliers and products for Ericsson’s mass production (Six
        Sigma Yellow Belt certificate)
      </Typography>
      <br />
      <Typography sx={{ fontWeight: "bold" }}>Key achievements:</Typography>
      <Typography style={{ textAlign: "justify" }}>
        ▪ Successfully approval of more than 200 Ericsson products on the NPI
        phase (APQP, PPAP)
      </Typography>
      <Typography style={{ textAlign: "justify" }}>
        ▪ Successfully audited suppliers in more than 10 factories in countries
        such as China, Hungary, Poland.
      </Typography>
      <Typography style={{ textAlign: "justify" }}>
        ▪ Successfully approved improvement quality project for radio products
      </Typography>
      <br />
      <Divider sx={{ my: 2 }} />
      <Typography variant="h3">Contec Industrial</Typography>{" "}
      <Typography variant="h4">Guatemala</Typography>{" "}
      <Typography variant="h4">
        Project Manager, crane kits division{" "}
      </Typography>
      <Typography variant="h4">2014 (May) - 2016 (July)</Typography> <br />
      <Typography sx={{ fontWeight: "bold" }}>Key achievements:</Typography>
      <Typography style={{ textAlign: "justify" }}>
        ▪ Successfully developed more than 20 mechanical machinery product
        projects for customers in Latin America and the Caribbeans, incurring on
        sales of more than 200,000.00 GBP/yearly
      </Typography>
    </CenteredBox>
  );
};

export default WorkExperience;
