import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Logo from "../assest/logo.png";
import Grid from "@mui/material/Grid";

import styles from "../index.css";
import { green, red, yellow } from "@mui/material/colors";

export default function ColorTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mystyle = {
    fontWeight: "bold",
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2} columns={15} style={{ borderBottom: 'ridge', borderWidth: '0.2px', borderColor: '#rgba(211,211,211,0.3)'}}>
        <Grid item xs={11}>
          <img src={Logo} style={{ height: 75 , marginLeft: 30}} />
        </Grid>
        <Grid item xs={4}>
        <Tabs value={value} onChange={handleChange} centered sx={{
            '& .MuiTabs-indicator': { backgroundColor: 'rgb(169,169,169)' },
            '& .MuiTab-root': { color: 'rgba(250, 250, 250, 1)'  },
            '& .Mui-selected': { color: 'rgb(169,169,169)' },
            marginTop: 2
          }}>
            <Tab value="one" label="About"/>
            <Tab value="two" label="Projects" />
            <Tab value="three" label="GET IN TOUCH" style={{background: 'rgb(105,105,105)', borderRadius: 50}} />
          </Tabs>
        </Grid>
      </Grid>
    </Box>
  );
}
