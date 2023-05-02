import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Logo from "../assest/logo.png";
import html from "../assest/html.png";
import css from "../assest/css-3.png";
import figma from "../assest/figma.png";
import photoshop from "../assest/photoshop.png";
import physics from "../assest/physics.png";
import Button from '@mui/material/Button';

export default function Project() {
  return (
    <div
      style={{
        marginTop: 170,
        maxWidth: "81%",
        height: "150px",
        marginRight: "Auto",
        marginLeft: "Auto",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={7}>
          <img
            src={Logo}
            alt="web pro"
            style={{ height: 300, width: 700, borderStyle: "groove" }}
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
          <h1>Personal Website</h1>
          <p>
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
                  style={{ width: 40 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={css}
                  alt="Avatar"
                  class="image"
                  style={{ width: 40 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={figma}
                  alt="Avatar"
                  class="image"
                  style={{ width: 40 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={photoshop}
                  alt="Avatar"
                  class="image"
                  style={{ width: 40 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={physics}
                  alt="Avatar"
                  class="image"
                  style={{ width: 40 }}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="outlined"
                  style={{
                    borderRadius: 25,
                    color: "white",
                    borderColor: "black",
                    background: 'rgb(105,105,105)',
                    marginTop:10
                  }}
                >
                  VIEW CODE
                </Button>
              </Grid>
            </Grid>
          </p>
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginTop:10}}>
        
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
          <h1>Personal Website</h1>
          <p>
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
                  style={{ width: 40 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={css}
                  alt="Avatar"
                  class="image"
                  style={{ width: 40 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={figma}
                  alt="Avatar"
                  class="image"
                  style={{ width: 40 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={photoshop}
                  alt="Avatar"
                  class="image"
                  style={{ width: 40 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={physics}
                  alt="Avatar"
                  class="image"
                  style={{ width: 40 }}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="outlined"
                  style={{
                    borderRadius: 25,
                    color: "white",
                    borderColor: "black",
                    background: 'rgb(105,105,105)',
                    marginTop:10
                  }}
                >
                  VIEW CODE
                </Button>
              </Grid>
            </Grid>
          </p>
        </Grid>
        <Grid item xs={7}>
          <img
            src={Logo}
            alt="web pro"
            style={{ height: 300, width: 700, borderStyle: "groove", marginLeft: 100 }}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginTop:10}}>
        <Grid item xs={7}>
          <img
            src={Logo}
            alt="web pro"
            style={{ height: 300, width: 700, borderStyle: "groove" }}
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
          <h1>Personal Website</h1>
          <p>
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
                  style={{ width: 40 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={css}
                  alt="Avatar"
                  class="image"
                  style={{ width: 40 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={figma}
                  alt="Avatar"
                  class="image"
                  style={{ width: 40 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={photoshop}
                  alt="Avatar"
                  class="image"
                  style={{ width: 40 }}
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src={physics}
                  alt="Avatar"
                  class="image"
                  style={{ width: 40 }}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="outlined"
                  style={{
                    borderRadius: 25,
                    color: "white",
                    borderColor: "black",
                    background: 'rgb(105,105,105)',
                    marginTop:10
                  }}
                >
                  VIEW CODE
                </Button>
              </Grid>
            </Grid>
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
