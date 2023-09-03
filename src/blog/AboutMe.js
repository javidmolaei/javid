import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function AboutMe() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="AboutMe"
    id="abo"
      
    >
      <h1 className="h1-man" style={{ fontFamily: "Mazius"}}>About me</h1>
      <p className="my-about">
      Hello, I'm Javid Molaei.<br /><br /> I'm passionate about programming and always strive to be positive, committed, and ethical. I highly value teamwork and have a strong team spirit. I have a great motivation to prove my abilities and I am highly diligent in achieving my goals.

Currently, I'm actively seeking a challenging position as a Java Developer. I have a deep interest in programming and as an enthusiastic and dedicated individual, I always aim to maintain a positive mindset, consistent performance, and professional conduct. I consider collaboration and effective communication with the team as a fundamental value.

I put forth my best efforts to establish myself as a skilled Java developer through hard work and continuous endeavor. I'm ready to apply my skills and provide innovative solutions as a Java Developer in a dynamic and challenging environment.
      </p>
    </div>
  );
}
