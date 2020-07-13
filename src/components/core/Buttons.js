import React from 'react';
// import React, { Component } from 'react';
import {Button,Grid} from '@material-ui/core';
import { createStyles, makeStyles, } from '@material-ui/core/styles';
import { ReactComponent as  Archive} from '../../assets/icons/archive.svg';
import Comdulk from '../../assets/images/fornt-Img.png';
// import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
// import Icon from '@material-ui/core/Icon';
// import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      background: '#fffff 0% 0% no-repeat padding-box',
      boxShadow: '0px 0px 8px #0000000A',
      border:' 0.25px solid #EDEDED',
      borderRadius: '8px',
      opacity:' 1',
    },
    title: {
      textAlign:'center',
      color:'#ffff'
    }
  }),
);

export default function IconLabelButtons() {
  const classes = useStyles();
  return (
    <Grid className= {classes.title}>
      <Button
        variant="contained"
        color='#cccccc'
        className={classes.button}
        startIcon={<Archive />}
      >
        Attendance
      </Button>
      <Button
        variant="contained"
        // color="secondary"
        className={classes.button}
        // startIcon={<DeleteIcon />}
      >
        Timesheets
      </Button> 
      <Button
        variant="contained"
        // color="secondary"
        className={classes.button}
        // startIcon={<DeleteIcon />}
      >
        Employees
      </Button> 
      <Button
        variant="contained"
        // color="secondary"
        className={classes.button}
        // startIcon={<DeleteIcon />}
      >
        Suppliers
      </Button> 
      <Button
        variant="contained"
        // color="secondary"
        className={classes.button}
        // startIcon={<DeleteIcon />}
      >
        Many more…
      </Button>    
      <Grid>
      <img src={Comdulk} alt='srilanka' />
      </Grid>
    </Grid>
  );
}