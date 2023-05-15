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
        marginTop: 80,
        maxWidth: "80%",
        height: "200px",
        margin: "Auto",
        padding: 100,
        borderRadius: 50,
        color: 'white'
      }}
    >
      <h1 style={{ fontFamily: "Mazius",position: "absolute" }}>About me</h1>
      <p style={{textAlign: 'left', fontFamily: "Avenir", marginTop:80, textJustify:"auto",fontSize:20,fontWeight:'normal', lineHeight: 1.6}}>
      Hello, I'm Javid Molaei.<br /><br /> I'm passionate about programming and always strive to be positive, committed, and ethical. I highly value teamwork and have a strong team spirit. I have a great motivation to prove my abilities and I am highly diligent in achieving my goals.

Currently, I'm actively seeking a challenging position as a Java Developer. I have a deep interest in programming and as an enthusiastic and dedicated individual, I always aim to maintain a positive mindset, consistent performance, and professional conduct. I consider collaboration and effective communication with the team as a fundamental value.

I put forth my best efforts to establish myself as a skilled Java developer through hard work and continuous endeavor. I'm ready to apply my skills and provide innovative solutions as a Java Developer in a dynamic and challenging environment.
      </p>
    </div>
  );
}
