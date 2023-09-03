import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import udemy from "../assest/udemy.png";
import Sololearn from "../assest/sololearn.png";
import Arasbaran from "../assest/arasbaran.png";
import javaC from "../assest/javaC.png";
import javaS from "../assest/javaS.png";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Certificate() {
  return (
    <div className="Certificate" style={{ textAlign: "center" }}>
      <h1
        className="h1-man"
        style={{
          fontFamily: "Mazius",
        }}
      >
        Certificate & License
        <br />
      </h1>

      <Grid
        className="grid-container-ui"
      >
        <Grid item xs>
          <img
            src={udemy}
            alt="Avatar"
            class="image"
            style={{ height: 150, width: 150 }}
          />
          <h1 style={{ fontFamily: "Mazius" }}>Udemy</h1>
          <p style={{ fontFamily: "Avenir" }}>
            Project development using Java 2023
          </p>
          <IconButton
            aria-label="fingerprint"
            color="error"
            size="small"
            href="https://www.linkedin.com/in/javid-molaei-9b506b202/details/certifications/"
          >
            More
            <Fingerprint />
          </IconButton>
        </Grid>
        <Grid item xs>
          <img
            src={javaC}
            alt="Avatar"
            class="image"
            style={{
              height: 150,
              width: 320,
            }}
          />
          <h1 style={{ fontFamily: "Mazius" }}>Javacup Association</h1>
          <p style={{maxWidth: '90%'}}>JavaCup Certified Professional, Java SE 8 Programmer</p>
        </Grid>
        <Grid item xs>
          <img
            src={javaS}
            alt="Avatar"
            class="image"
            style={{ height: 150, width: 150 }}
          />
          <h1 style={{ fontFamily: "Mazius" }}>RIEMP</h1>
          <p style={{ fontFamily: "Avenir" }}>
            Java School Certified Professional, Java EE 11 Application Developer
          </p>
        </Grid>
        <Grid className="item1" item xs>
          <img
            src={Sololearn}
            alt="Avatar"
            class="image"
            style={{ height: 150, width: 150 }}
          />
          <h1 style={{ fontFamily: "Mazius" }}>Sololearn</h1>
          <p style={{ fontFamily: "Avenir" }}>
            Introduction to Programming Using Java
          </p>
        </Grid>
        <Grid className="item2" item xs>
          <img
            src={Arasbaran}
            alt="Avatar"
            class="image"
            style={{ height: 150, width: 200 }}
          />
          <h1 style={{ fontFamily: "Mazius" }}>Arasbaran Travel Agency</h1>
          <p style={{ fontFamily: "Avenir" }}>
            Certified Tour Guide / Director
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
