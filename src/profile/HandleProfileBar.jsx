import React, { useState } from "react";
import NavBar from "./NavBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Profile from "./Profile";
import WorkExperience from "./Work Experience";
import Education from "./Education";
import { useEffect } from "react";
import Languages from "./languages";

function HandleNavBar() {
  const [responseObject, setResponseObject] = useState(null);

  const handleButtonClick = (buttonName) => {
    const response = {
      Profile: {
        message: <Profile />,
      },
      WorkExperience: {
        message: <WorkExperience />,
      },
      Education: {
        message: <Education />,
      },
      Languages: {
        message: <Languages />,
      },
    };
    setResponseObject(response[buttonName]);
  };

  return (
    <>
      <NavBar onButtonClick={handleButtonClick} />
      <main>
    
        {responseObject && (
          <Box>
            <Typography variant="h6">{responseObject.message}</Typography>
          </Box>
        )}
        
      </main>
    </>
  );
}

export default HandleNavBar;