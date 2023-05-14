import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import GoogleIcon from '@mui/icons-material/Google';

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
        marginTop: 1100,
        maxWidth: "70%",
        // height: "200px",
        marginRight: "Auto",
        marginLeft: "Auto",
        padding: 100,
        color: "white",
      }}
    >
      <h1
        style={{
          fontFamily: "-moz-initial",
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
          justifyContent: "center"
        }}
      >
        <IconButton
          color="default"
          aria-label="google"
          component="label"
          style={{ color: "whitesmoke" }}
        >
          <input hidden accept="image/*" type="file" />
          <GoogleIcon />
        </IconButton>
        <IconButton
          color="default"
          aria-label="linkedin"
          component="label"
          style={{ color: "whitesmoke" }}
        >
          <input hidden accept="image/*" type="file" />
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color="default"
          aria-label="github"
          component="label"
          style={{ color: "whitesmoke" }}
        >
          <input hidden accept="image/*" type="file" />
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="default"
          aria-label="instagram"
          component="label"
          style={{ color: "whitesmoke" }}
        >
          <input hidden accept="image/*" type="file" />
          <InstagramIcon />
        </IconButton>
      </div>
      
    </div>
    <hr style={{width: "99.8%"}}/>
    </div>
  );
}
