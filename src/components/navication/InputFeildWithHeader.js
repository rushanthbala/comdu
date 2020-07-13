import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import { Button,Typography,Grid } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
    
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  header :{
    textAlign: 'center',
    font: 'Bold 36px/55px Poppins',
    letterSpacing: '0px',
    color: '#22242A',
    opacity: '1',
  },
  para :{
    font:' Light 16px/25px Poppins',
    letterSpacing:' 0px',
    color: '#181D33',
    opacity:' 1',
  },
  search:{
    font:' Light 16px/25px Poppins',
    letterSpacing:' 0px',
    color: '#181D33',
    opacity:' 1',
  },
  Grid:{
    textAlign: 'center',
  },
  input:{
    marginLeft: theme.spacing(1),
    flex: 1,
  }
}));

export default function InputFeildWithHeader () {
  const classes = useStyles();

  return (
    <div>
        <Grid className={classes.Grid}>
          <Typography  variant="h2" className={classes.header} >Open data portal for anyone!</Typography>
          <Typography variant="h5" className={classes.para} >Lorem ipsum dolor sit amet, consectetur 
             adipiscing elit, sed do.</Typography>       
             <InputBase
                className={classes.input}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
          <Button variant="contained" color="primary">AUTOMATE</Button>
        </Grid>
    </div>
  );
}