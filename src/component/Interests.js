import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const itemDto = [
  {
    id: "1",
    name: "JAVA",
  },
  {
    id: "2",
    name: "JavaScript",
  },
  {
    id: "3",
    name: "ReactJs",
  },
  {
    id: "4",
    name: "Software",
  },
  {
    id: "5",
    name: "Web Design",
  },
  {
    id: "6",
    name: "Tour Guide ",
  },
];

export default function Interests() {
  return (
    <div
      style={{
        textAlign: "center",
        color: "whitesmoke",
        fontFamily: "NeutralFace",
        marginTop: 180
      }}
    >
      <h1
        style={{
          fontFamily: "Mazius"
        }}
      >
        Interests
      </h1>
      <p style={{fontFamily: "Avenir"}}>
        Some things I enjoy learning about and doing
        <br />
        <br />
      </p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ maxWidth: "83%", marginRight: "Auto", marginLeft: "Auto" }}
        >
          {itemDto.map((item) => (
            <Grid xs={2} sm={4} md={4}>
              <Item
                sx={{
                  background: "rgb(39, 45, 43)",
                  borderRadius: 2,
                  // height: 150,
                  padding: 7,
                  fontSize: 25,
                  color : 'white'
                }}
              >
                {item.name}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
