import React, { useState, useEffect } from 'react';
import { remote } from 'electron';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  {
    root: {
      display: 'inline-block',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 5,
      boxSizing: 'border-box'
    },
    button: {
      width: 115
    },
    buttonactive: {
      width: 115,
      backgroundColor: 'rgb(20, 20, 20)'
    }
  },
  { name: 'file-handler' }
);

const FileHandler = props => {
  const classes = useStyles();

  const [isActive, setIsActive] = useState('inactive');

  const handleFileChange = files => {
    props.fileCallback(files);
  };

  const openDialog = () => {
    setTimeout(() => {
      remote.dialog
        .showOpenDialog({
          filters: [
            { name: 'EP SQLite Files', extensions: ['sql'] },
            { name: 'All Files', extensions: ['*'] }
          ],
          properties: ['openFile', 'multiSelections']
        })
        .then(d => handleFileChange(d.filePaths));
    }, 0);
  };

  const handleDragEnter = e => {
    let event = e as Event;
    event.stopPropagation();
    event.preventDefault();
  };
  const handleDragOver = e => {
    let event = e as Event;
    event.stopPropagation();
    event.preventDefault();
    setIsActive('active');
  };
  const handleDragLeave = e => {
    let event = e as Event;
    event.stopPropagation();
    event.preventDefault();
    setIsActive('inactive');
  };
  const handleDrop = e => {
    let files = Object.values(e.dataTransfer.files).map(f => f.path);

    // handle error alert for non-sql files
    let errflag = false;
    files.forEach(f => {
      if (f.split('.')[1] != 'sql') {
        errflag = true;
      }
    });

    if (!errflag) {
      handleFileChange(files);
      setIsActive('inactive');
    } else {
      alert('file loading error: only SQL files allowed');
      setIsActive('inactive');
    }
  };
  return (
    <div className={classes.root}>
      <Button
        disableRipple={true}
        variant="contained"
        color="primary"
        className={isActive == 'active' ? classes.buttonactive : classes.button}
        onClick={openDialog}
        onDragEnter={handleDragEnter}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        Load Files
      </Button>
    </div>
  );
};

export { FileHandler };
