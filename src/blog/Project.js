import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Logo from "../assest/logo.png";
import Pm from "../assest/pm.jpg";
import html from "../assest/html.png";
import java from "../assest/java.png";
import javid from "../assest/javid.png";
import javidmolaei from "../assest/javidmolaei.png";
import uruz from "../assest/uruzCF.jpg";
import oracle from "../assest/oracle.png";
import css from "../assest/css-3.png";
import figma from "../assest/figma.png";
import flag from "../assest/flag.png";
import photoshop from "../assest/photoshop.png";
import physics from "../assest/physics.png";
import Button from "@mui/material/Button";

export default function Project() {
  return (
    <div
      id="pro"
      style={{
        marginTop: 220,
        maxWidth: "80%",
        marginRight: "auto",
        marginLeft: "auto"
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={7}>
          <img
            src={javidmolaei}
            alt="web pro"
            style={{
              height: 300,
              width: '100%',
              borderRadius: 30,
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            textAlign: "left",
            color: "whitesmoke",
            fontFamily: "-moz-initial",
          }}
        >
          <h2>WEB DEVELOPMENT</h2>
          <h1
            style={{
              fontFamily: "Mazius",
            }}
          >
            Personal Website
          </h1>
          <p style={{ fontFamily: "Avenir" }}>
            My personal project is written in React JS language and a brief
            resume of me is uploaded on this project and the source code of the
            project is available on GitHub for everyone to use.
          </p>
          <p>
            <Grid container spacing={6} columns={14}>
              <Grid item xs={2}>
                <img
                  src={html}
                  alt="Avatar"
                  class="image"
                  style={{ width: 35 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={css}
                  alt="Avatar"
                  class="image"
                  style={{ width: 35 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={figma}
                  alt="Avatar"
                  class="image"
                  style={{ width: 35 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={photoshop}
                  alt="Avatar"
                  class="image"
                  style={{ width: 35 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={physics}
                  alt="Avatar"
                  class="image"
                  style={{ width: 35 }}
                />
              </Grid>
              <Grid item xs={4}>
                <a href="https://github.com/javidmolaei/javid">
                  <Button
                    variant="outlined"
                    style={{
                      borderRadius: 25,
                      color: "white",
                      borderColor: "black",
                      background: "rgb(105,105,105)",
                      marginTop: 10,
                      fontSize: 10,
                    }}
                  >
                    VIEW CODE
                  </Button>
                </a>
              </Grid>
            </Grid>
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginTop: 10 }}
      >
        <Grid
          item
          xs={5}
          sx={{
            textAlign: "left",
            color: "whitesmoke",
            fontFamily: "-moz-initial",
          }}
        >
          <h2>Mobile App</h2>
          <h1
            style={{
              fontFamily: "Mazius",
            }}
          >
            Police Man
          </h1>
          <p style={{ fontFamily: "Avenir" }}>
            This program provides you with the possibility of easy and faster
            use of Naja (Police) electronic services.
          </p>
          <p>
            <Grid container spacing={6} columns={14}>
              <Grid item xs={2}>
                <img
                  src={java}
                  alt="Avatar"
                  class="image"
                  style={{ width: 35 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={oracle}
                  alt="Avatar"
                  class="image"
                  style={{ width: 45 }}
                />
              </Grid>
              <Grid item xs={4}>
                <a href="https://cafebazaar.ir/app/com.nrdc.android.pyh">
                  <Button
                    variant="outlined"
                    style={{
                      borderRadius: 25,
                      color: "white",
                      borderColor: "black",
                      background: "rgb(105,105,105)",
                      marginTop: 10,
                      fontSize: 11,
                    }}
                  >
                    DOWNLOAD
                  </Button>
                </a>
              </Grid>
            </Grid>
          </p>
        </Grid>
        <Grid item xs={7}>
          <img
            src={Pm}
            alt="web pro"
            style={{
              height: 300,
              width: "100%",
              // marginLeft: 100,
              borderRadius: 30,
            }}
            // , borderStyle: "groove"
          />
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginTop: 10 }}
      >
        <Grid item xs={7}>
          <img
            src={uruz}
            alt="web pro"
            style={{ height: 300, width: "100%", borderRadius: 30 }}
          />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            textAlign: "left",
            color: "whitesmoke",
            fontFamily: "-moz-initial",
          }}
        >
          <h2>APPLICATION & WEB PANEL</h2>
          <h1
            style={{
              fontFamily: "Mazius",
            }}
          >
            URUZ
          </h1>
          <p style={{ fontFamily: "Avenir" }}>
            In uruz, specialized training programs based on genetic and physical
            conditions are provided in a scientific and specialized manner by
            experienced and well-known trainers and specialized staff.
          </p>
          <p>
            <Grid container spacing={6} columns={14}>
              <Grid item xs={2}>
                <img
                  src={flag}
                  alt="Avatar"
                  class="image"
                  style={{ width: 35 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={java}
                  alt="Avatar"
                  class="image"
                  style={{ width: 35 }}
                />
              </Grid>
              <Grid item xs={4}>
                <a href="https://github.com/javidmolaei/fitSho">
                  <Button
                    variant="outlined"
                    style={{
                      borderRadius: 25,
                      color: "white",
                      borderColor: "black",
                      background: "rgb(105,105,105)",
                      marginTop: 10,
                      fontSize: 10
                    }}
                  >
                    VIEW CODE
                  </Button>
                </a>
              </Grid>
            </Grid>
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
