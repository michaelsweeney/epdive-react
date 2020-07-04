import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  {
    root: {
      textAlign: 'center',
      marginTop: '15%',
      marginBottom: '20%',
      padding: 20,
      color: 'rgba(0,0,0,0.54)'
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
      fontWeight: 500
    },
    maintext: {
      fontSize: 16,
      marginBottom: 16,
      fontWeight: 500
    },
    subtext: {
      fontSize: 16,
      fontWeight: 250
    }
  },

  {
    name: 'landing-page'
  }
);

const LandingPage = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        Timestep: EnergyPlus timeseries visualization tool
      </div>

      <div className={classes.maintext}>No Files are currently loaded.</div>

      <div className={classes.maintext}>
        Select "LOAD FILES" or drop SQL file to load timeseries results.
      </div>
      <div className={classes.subtext}>
        Make sure that "Output:SQLite:SimpleAndTabular" has been included in
        your IDF file.
      </div>
    </div>
  );
};

export { LandingPage };
