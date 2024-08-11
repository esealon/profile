import CenteredBox from "../CenteredBox";
import Divider from "@mui/material/Divider";

import "../styles.css";

const Intro = () => {
  return (
    <>
      <CenteredBox>
        <h1>Welcome to my WebPage</h1>
        <Divider sx={{ my: 2 }} />

        <p style={{ textAlign: "justify" }}>
          Here you will find different type of information about myself, my work
          experience, education and specially the things I can do in programming
          on the "Projects" area.
        </p>
      </CenteredBox>
    </>
  );
};

export default Intro;
