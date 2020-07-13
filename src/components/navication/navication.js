import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Comdulogo from  '../../assets/logos/comduit-logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,   
      padding:'10px'
    },
    bar:{
      boxShadow: 'none',
      color:'transparent',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      alignItems:'center',
      flexGrow: 1,
    },
    button: {
      padding:'20px 54px',
      letterSpacing: '0px',
      color: '#201F1F',
      textTransform: 'uppercase',
      opacity: 1,
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar   className={classes.bar} position="static" color='transparent' >
        <Toolbar>
          <Grid className={classes.title} >
            <img src={Comdulogo} alt='logo' />
          </Grid >
          <Grid  >
            <Button className={classes.button} >Home</Button>
            <Button className={classes.button} >Portfolio</Button>
            <Button className={classes.button} >BLOG</Button>
            <Button className={classes.button} >CONTACT</Button>
            <Button className={classes.button} >Login</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
