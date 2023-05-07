import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import udemy from "../assest/udemy.jfif";
import Sololearn from "../assest/sololearn.jfif";
import Arasbaran from "../assest/arasbaran.jfif";
import javaC from "../assest/javaC.jfif";
import javaS from "../assest/javaS.jfif";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Certificate() {
  return (
    <div
      style={{
        textAlign: "center",
        color: "whitesmoke",
        fontFamily: "-moz-initial",
        marginTop: 200,
      }}
    >
      <h1
        style={{
          fontFamily: "serif",
        }}
      >
        Certificate & License
        <br />
        <br />
      </h1>
      <Grid
        container
        spacing={3}
        sx={{ width: "80%", marginRight: "Auto", marginLeft: "Auto" }}
      >
        <Grid item xs>
          <img src={udemy} alt="Avatar" class="image" style={{borderRadius: 100}} />
          <h1>Udemy</h1>
          <p>Project development using Java</p>
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{
              width: "auto",
              textAlign: "left",
              marginRight: "Auto",
              marginLeft: 13,
            }}
          >
            <TreeItem nodeId="1" label="More Udemy Certificate">
              <TreeItem nodeId="2" label="Java" />
              <TreeItem nodeId="2" label="Java bootcamp" />
              <TreeItem nodeId="2" label="Java OOP" />
              <TreeItem nodeId="2" label="Java collections framework" />
              <TreeItem nodeId="2" label="Java fundamental" />
              <TreeItem nodeId="2" label="Java network programming" />
              <TreeItem nodeId="2" label="Jpa & hibernate" />
              <TreeItem nodeId="2" label="Bootstrap css & html certification" />
              <TreeItem
                nodeId="2"
                label="Certification course for java learner"
              />
              <TreeItem nodeId="2" label="Certified Scrum Trainer (CST)" />
              <TreeItem nodeId="2" label="Css crash course" />
              <TreeItem nodeId="2" label="Design pattern in java" />
              <TreeItem nodeId="2" label="Docker" />
              <TreeItem nodeId="2" label="Drupal" />
              <TreeItem
                nodeId="2"
                label="Fundamentals of oop: java & intelliJ"
              />
              <TreeItem nodeId="2" label="git" />
              <TreeItem nodeId="2" label="github" />
              <TreeItem nodeId="2" label="gitlab" />
              <TreeItem nodeId="2" label="GoF design pattern with java" />
              <TreeItem nodeId="2" label="Google analytics certification" />
              <TreeItem nodeId="2" label="HTML5" />
              <TreeItem nodeId="2" label="Introduction to Microservices" />
              <TreeItem nodeId="2" label="HTML and CSS" />
              <TreeItem nodeId="2" label="Kubernetes" />
              <TreeItem
                nodeId="2"
                label="Master course in business budgeting"
              />
              <TreeItem nodeId="2" label="Master multithreadinh concurrency" />
              <TreeItem nodeId="2" label="Diploma: Project management" />
              <TreeItem nodeId="2" label="PostgreSQL and MySql certificates" />
              <TreeItem nodeId="2" label="PowerShell functions master class" />
              <TreeItem nodeId="2" label="network applications in java" />
              <TreeItem nodeId="2" label="React and JavaScript" />
              <TreeItem nodeId="2" label="Visual studio code ultimate" />
              {/* <a href="ude.my/UC-350d9b26-b5d7-487b-8dc8-7e58dcc98ed7">
                Bootstrap css & html certification
              </a> */}
            </TreeItem>
          </TreeView>
        </Grid>
        <Grid item xs>
          <img src={javaC} alt="Avatar" class="image" style={{borderRadius: 100 }} />
          <h1>Javacup Association</h1>
          <p>JavaCup Certified Professional, Java SE 8 Programmer</p>
        </Grid>
        <Grid item xs>
          <img src={javaS} alt="Avatar" class="image" style={{borderRadius: 100}} />
          <h1>RIEMP</h1>
          <p>
            Java School Certified Professional, Java EE 11 Application Developer
          </p>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{
          width: "50%",
          marginRight: "Auto",
          marginLeft: "Auto",
          marginTop: 10,
        }}
      >
        <Grid item xs>
          <img src={Sololearn} alt="Avatar" class="image" style={{borderRadius: 100}} />
          <h1>Sololearn</h1>
          <p>Introduction to Programming Using Java</p>
        </Grid>
        <Grid item xs>
          <img src={Arasbaran} alt="Avatar" class="image" style={{borderRadius: 100}} />
          <h1>Arasbaran Travel Agency</h1>
          <p>Certified Tour Guide / Director</p>
        </Grid>
      </Grid>
    </div>
  );
}
