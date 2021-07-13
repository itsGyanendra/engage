import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles ,IconButton, Tooltip} from '@material-ui/core';
import {Videocam, VideocamOff, Mic, MicOff, SpeakerNotes, SpeakerNotesOff, Chat} from "@material-ui/icons";
import { SocketContext } from '../SocketContext';
import useWindowDimensions from './windowdimension';



const VideoPlayer = ({children}) => {
  const {name, callAccepted, myVideo,aud,vid,userVideo, callEnded, stream, call ,videotoggle,audiotoggle,note,notetoggle,showchat,showchattoggle} = useContext(SocketContext);
  const { width } = useWindowDimensions();

  const useStyles = makeStyles((theme) => ({
    video: {
      width: 40/100 *width,
      
      [theme.breakpoints.down('sm')]: {
        width: 80/100*width,
        
      },
    },
    gridContainer: {
      
      direction:"row",
      justify:"space-between",
      alignItems:"center",
      
     
    },
    paper: {
      padding: '2px',
      border: '4px solid black',
      margin: '1px',
    },
  }));
  
  const classes = useStyles();

  return (
    
    <Grid container className={classes.gridContainer} style={{paddingTop:"100px", paddingBottom:"100px"}}>
 
      {stream && (
        <Paper className={classes.paper}>
          
         
          <Grid item xs={12} md={12}>
            <Typography variant="h5" gutterBottom>{name+ " (You)" || "You"}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
            {!(callAccepted && !callEnded)&&
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} md= {3}>
              {vid&&(
                <center>
              <Tooltip title="Off Video"><IconButton variant="rounded" color="primary" onClick={() => videotoggle()} className={classes.margin}>
                   <Videocam fontSize="large" />
              </IconButton></Tooltip></center>
            )}

            {!vid&&(
              <center><Tooltip title="On Video"><IconButton  variant="rounded" color="primary"  onClick={() => videotoggle()} className={classes.margin}>
                   <VideocamOff fontSize="large" />
              </IconButton></Tooltip></center>
            )}
                </Grid>

                <Grid item xs={3} md={3}>
                {aud &&(
                  <center>
                    <Tooltip title="Off Audio">
               <IconButton  variant="contained" color="primary" fullWidth onClick={() => audiotoggle()} className={classes.margin}>
                  <Mic fontSize="large" />
                    </IconButton></Tooltip></center>
             )}
             {!aud &&(
               <center>
                 <Tooltip title="On Audio"><IconButton  variant="contained" color="primary" fullWidth onClick={() => audiotoggle()} className={classes.margin}>
               <MicOff fontSize="large" />
               </IconButton></Tooltip></center>
             )}

                </Grid>

                <Grid item xs={3} md={3}>
            
                {showchat &&(
                  <center>
                     <Tooltip title="Hide Chat">
               <IconButton variant="contained" color="primary" fullWidth onClick={() => showchattoggle()} className={classes.margin}>
                  <Chat fontSize="large" />
                    </IconButton></Tooltip></center>
             )}
             {!showchat &&(
               <center><Tooltip title="Show Chat"><IconButton variant="contained" color="primary" fullWidth onClick={() => showchattoggle()} className={classes.margin}>
               <Chat fontSize="large" />
               </IconButton></Tooltip></center>
             )}
          
                </Grid>

                <Grid item xs={3} md={3}>
            
                {note &&(
                  <center><Tooltip title="Hide Message Minutes">
               <IconButton variant="contained" color="primary" fullWidth onClick={() => notetoggle()} className={classes.margin}>
                  <SpeakerNotes fontSize="large" />
                    </IconButton></Tooltip></center>
             )}
             {!note &&(
               <center><Tooltip title="Show Message Minutes"><IconButton variant="contained" color="primary" fullWidth onClick={() => notetoggle()} className={classes.margin}>
               <SpeakerNotesOff fontSize="large" />
               </IconButton></Tooltip></center>
             )}
          
                </Grid>
                
                
               
            </Grid>
            }
          </Grid>
             
        </Paper>
      )}
    
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
         
            <Typography variant="h5" gutterBottom>{call.name || 'Guest'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
        {children}  
    </Grid>


  );
};

export default VideoPlayer;