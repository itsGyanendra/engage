import React, { useContext } from 'react';
import { Button, Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import {Assignment, Phone, PhoneDisabled } from "@material-ui/icons";
import { SocketContext } from '../SocketContext';


const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const {name, callAccepted, myVideo, userVideo, callEnded, stream, call ,videotoggle,audiotoggle, sharescreen} = useContext(SocketContext);
  
  const classes = useStyles();

  return (

    <Grid container className={classes.gridContainer}>
      
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
            <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => videotoggle()} className={classes.margin}>
                    Video on/off
              </Button>
              <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => audiotoggle()} className={classes.margin}>
                    audio on/off
              </Button>
              <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => sharescreen()} className={classes.margin}>
                    Share screen
              </Button>
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
       
    </Grid>

  );
};

export default VideoPlayer;