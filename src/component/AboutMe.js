import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";

export default function AboutMe() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div
    id="abo"
      style={{
        marginTop: 100,
        maxWidth: "70%",
        height: "200px",
        marginRight: "Auto",
        marginLeft: "Auto",
        padding: 100,
        borderRadius: 50,
        color: 'white'
      }}
    >
      <h1 style={{ fontFamily: "Mazius",position: "absolute", left:500 }}>About me</h1>
      <p style={{maxWidth:"30%", textAlign: 'left', position: "absolute", right: 400, marginTop: 35 , fontFamily: "Avenir"}}>
        hello my name is javid molaei.<br /><br /> I love programming, I always try to be
        positive, punctual and good, I really appreciate team work and I have a
        good team spirit.<br /> I have a lot of motivation to prove my abilities and I
        am very hardworking to achieve my goals.<br /><br /> Seeking to secure a challenging
        position as a Java Developer.
      </p>
    </div>
  );
}
