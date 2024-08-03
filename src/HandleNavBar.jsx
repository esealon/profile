// import React, { useState } from "react";
// import NavBar from "./NavBar";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Profile from "./Profile";
// import WorkExperience from "./Work Experience";
// import Education from "./Education";
// import { useEffect } from "react";
// import Languages from "./languages";
// import Home from "./Home";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// function HandleNavBar() {
//   const [responseObject, setResponseObject] = useState(null);

//   const handleButtonClick = (buttonName) => {
//     const response = {
//       Home: {
//         message: <Home />,
//       },
//       Profile: {
//         message: <Profile />,
//       },
//       WorkExperience: {
//         message: <WorkExperience />,
//       },
//       Education: {
//         message: <Education />,
//       },
//       Languages: {
//         message: <Languages />,
//       },
//     };
//     setResponseObject(response[buttonName]);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="profile/" element={<Home />} />
//         <Route path="profile/profile" element={<Profile />} />
//         <Route path="profile/work_experience" element={<WorkExperience />} />
//         <Route path="profile/education" element={<Education />} />
//         <Route path="profile/languages" element={<Languages />} />
//         <Route path="*" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default HandleNavBar;
