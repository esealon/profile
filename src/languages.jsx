import React from "react";

import CenteredBox from "./CenteredBox";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "./styles.css";
import NavBarProjects from "./NavBarProjects";

import { v4 as uuidv4 } from "uuid";

const langItems = [
  { name: "Spanish", level: "Native", id: uuidv4() },
  { name: "English", level: "Proficient", id: uuidv4() },
  { name: "Estonian", level: "Proficient", id: uuidv4() },
];

const Languages = () => {
  return (
    <>
    <NavBarProjects />
      <CenteredBox>
        <div className="main-page">
          <h1 style={{ textAlign: "center" }}>Languages</h1>
          <Divider sx={{ my: 2 }} />

          <TableContainer
            component={Paper}
            sx={{
              width: "300px",
              maxHeight: "500px",
              margin: "0 auto",
              boxShadow: 3,
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell id="CenterBold">Language</TableCell>
                  <TableCell id="CenterBold">Level</TableCell>
                </TableRow>
              </TableHead>

              {langItems.map((langItem) => (
                <TableBody key={langItem.id}>
                  <TableRow>
                    <TableCell>{langItem.name}</TableCell>
                    <TableCell>{langItem.level}</TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        </div>
      </CenteredBox>
    </>
  );
};

export default Languages;
