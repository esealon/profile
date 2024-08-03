import { useEffect } from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";

const Home = () => {
  return (
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
  );
};

export default Home;
