import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import { BrowserRouter } from "react-router-dom";
import banner from "../assest/javidBanner2.png"

export default function About() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div
    
      style={{
        backgroundColor: "rgba(250, 250, 250, 1)",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: 'right',
        marginTop: 120,
        textAlign: "left",
        maxWidth: "70%",
        height: "200px",
        marginRight: "Auto",
        marginLeft: "Auto",
        padding: 100,
        borderRadius: 50,
      }}
    >
      <h1 style={{ fontFamily: "Mazius" }}>hello !</h1>
      <p style={{fontFamily: "Avenir"}}>
        I'm javid, I am currently working as a Java programmer in NRDC Company.
        <br />
        Welcome to my web dev project 😎
      </p>

      <Grid container spacing={3} sx={{ flexGrow: 1, marginTop: 5 }}>
        <Grid xs={6} xsOffset={3} md={2} mdOffset={0}>
          <IconButton
            color="default"
            aria-label="linkedin"
            component="label"
            style={{ color: "black" }}
          >
            <a
              href="https://www.linkedin.com/in/javid-molaei-9b506b202/"
              style={{ color: "black" }}
            >
              <LinkedInIcon />
            </a>
          </IconButton>
          <IconButton
            color="default"
            aria-label="github"
            component="label"
            style={{ color: "black" }}
          >
            <a
              href="https://github.com/javidmolaei"
              style={{ color: "black" }}
            >
              <GitHubIcon />
            </a>
          </IconButton>
          <IconButton
            color="default"
            aria-label="instagram"
            component="label"
            style={{ color: "black" }}
          >
            <a
              href="https://www.instagram.com/javidmolaei"
              style={{ color: "black" }}
            >
              <InstagramIcon />
            </a>
            
          </IconButton>
        </Grid>
        <Grid xs={4} md={2} mdOffset={6}>
          <Button
            variant="outlined"
            style={{ borderRadius: 25, color: "black", borderColor: "black" ,fontFamily: "NeutralFace",fontSize: 13}}
          >
            VIEW PROJECTS
          </Button>
        </Grid>
        <Grid xs={4} xsOffset={4} md={2} mdOffset={0}>
          <Button
            variant="contained"
            style={{ borderRadius: 25, color: "white", background: "black" , fontFamily: "NeutralFace",fontSize: 13 }}
            href="#getIn"
          >
            GET IN TOUCH
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
