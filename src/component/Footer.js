import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <div style={{width: "50%", margin:"auto",textAlign:"center", color:"whitesmoke",fontSize:14}}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} sx={{fontSize:20, marginTop:2, marginBottom:5 ,fontFamily: "NeutralFace"}}>
        <Grid item xs>
          <Link href="#abo" underline="none" color="whitesmoke">About</Link>
        </Grid>
        <Grid item xs>
        
        <Link href="#pro" underline="none" color="whitesmoke">Projects</Link>
        </Grid>
        <Grid item xs>
        <Link href="#getIn" underline="none" color="whitesmoke">Contact</Link>
          
        </Grid>
      </Grid>
    </Box>
    <p>©2023 Javid Molaei All Rights Reserved</p>
    </div>
  );
}