import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import CenteredBox from "../CenteredBox";

import React, { useState } from "react";
import { Button, Collapse, Typography } from "@mui/material";
import "../styles.css";

const GuatePictures = () => {
  const [open2, setOpen2] = useState(false);
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <>
      <Box onClick={handleClick2}>
        <CenteredBox>
          <br />
          {open2 ? (
            <p>Collapse images</p>
          ) : (
            <p>Do you want to see something amazing? click here...</p>
          )}

          <Collapse in={open2}>
            <Container maxWidth="lg">
              <Box sx={{ p: 2, mt: 2 }}>
                <p className="titlePicture">Antigua Guatemala</p>
                <Box sx={{ width: "100%", height: "auto", overflow: "hidden" }}>
                  <img
                    src="https://res.cloudinary.com/dvucxxtju/image/upload/v1723306449/20220321_120623_trjlnu.jpg"
                    alt="Responsive"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "4px",
                    }}
                  />
                  <img
                    src="https://res.cloudinary.com/dvucxxtju/image/upload/v1723306451/20220321_153128_sjnata.jpg"
                    alt="Responsive"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "4px",
                    }}
                  />
                </Box>
                <p className="titlePicture">Guatemala City</p>
                <Box sx={{ width: "100%", height: "auto", overflow: "hidden" }}>
                  <img
                    src="https://res.cloudinary.com/dvucxxtju/image/upload/v1723306450/20221212_104105_2_rmvy6r.jpg"
                    alt="Responsive"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "4px",
                    }}
                  />
                  <p className="titlePicture">Ciudad Cayala, Guatemala City</p>
                </Box>
                <Box sx={{ width: "100%", height: "auto", overflow: "hidden" }}>
                  <img
                    src="https://res.cloudinary.com/dvucxxtju/image/upload/v1723306449/20220314_124951_kj7hjk.jpg"
                    alt="Responsive"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "4px",
                    }}
                  />
                </Box>
              </Box>
            </Container>
          </Collapse>
        </CenteredBox>
      </Box>
    </>
  );
};

export default GuatePictures;
