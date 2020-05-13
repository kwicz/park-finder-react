import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: 'rgb(45,45,45,0.6)'
  },
}));

function Header(){
  const classes = useStyles();

  return (
    <React.Fragment >
      <div className={classes.root}>
        <h1 >US National Parks</h1>
        <h2>Find infermation about yer faverite nertional perk.</h2>
        <h3>Yeehaw.</h3>
      </div>
    </React.Fragment>
  );
}

export default Header;