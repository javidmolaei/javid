import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

export default function GetIn() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const styleLogo = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  return (
    <div id="getIn">
      <div
        style={{
          maxWidth: "70%",
          marginRight: "Auto",
          marginLeft: "Auto",
          padding: 100,
          color: "white",
        }}
      >
        <h1
          style={{
            fontFamily: "Mazius",
            position: "inherit",
            textAlign: "center",
          }}
        >
          get in touch
        </h1>
        <p
          style={{
            position: "inherit",
            textAlign: "center",
            alignContent: "center",
            fontFamily: "Avenir",
          }}
        >
          I’m currently open to new opportunities, inbox is always open!
          <br />
          Find me everywhere @javidmolaei
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="http://www.javidmolaei.ir">
            <IconButton
              color="default"
              aria-label="google"
              component="label"
              style={{ color: "whitesmoke" }}
            >
              <GoogleIcon />
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/javid-molaei-9b506b202/">
            <IconButton
              color="default"
              aria-label="linkedin"
              component="label"
              style={{ color: "whitesmoke" }}
            >
              <LinkedInIcon />
            </IconButton>
          </a>
          <a href="https://github.com/javidmolaei">
            <IconButton
              color="default"
              aria-label="github"
              component="label"
              style={{ color: "whitesmoke" }}
            >
              <GitHubIcon />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/javidmolaei">
            <IconButton
              color="default"
              aria-label="instagram"
              component="label"
              style={{ color: "whitesmoke" }}
            >
              <InstagramIcon />
            </IconButton>
          </a>
        </div>
      </div>
      <hr style={{ width: "99.8%" }} />
    </div>
  );
}
