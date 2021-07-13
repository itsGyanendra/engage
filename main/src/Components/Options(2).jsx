/****************Importing Necessary Components ****************************/

import React, { useContext,useState } from 'react'
import {Button, TextField, Grid, Typography, Container, Tooltip} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard} from 'react-copy-to-clipboard';
import {Assignment, Phone } from "@material-ui/icons";
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    gridContainer: {
      width: '100%',
      
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    container: {
      width: '50%',
      margin: '35px 0',
      padding: 0,
      [theme.breakpoints.down('sm')]: {
        width: '80%',
      },
    },
    div:{
      padding: '100px',
      [theme.breakpoints.down('sm')]: {
        padding: '1px',
      },
    },
    margin: {
      marginTop: 20,
    },
    padding: {
      padding: 20,
    },
   
  }));

  const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, callUser, calling,setstartnew,startnew } = useContext(SocketContext);
    
    const [idToCall, setIdToCall] = useState('');
  
    const classes = useStyles();


    return (
      <Container className={classes.container}>
        
          {!(callAccepted && !callEnded)&&!calling&&!startnew &&
          <div className= {classes.div}>
            <form className={classes.root} noValidate autoComplete="off">
              <Grid container className={classes.gridContainer} >
                <Grid item xs={12} className={classes.padding}>
                  <TextField label="Name" defaultValue = {localStorage.getItem("name")}  onChange={(e) => setName(e.target.value)} fullWidth />
                </Grid>
                <Grid item xs={12} md={6} className={classes.padding}>
                  <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                </Grid>
                <Grid item xs={12} md={6} className={classes.padding}>
                  <Tooltip title="Click here to join meeting">
                    <Button variant="outlined" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className={classes.margin}>
                      Join Meeting
                    </Button>
                  </Tooltip>
                </Grid>
                <Grid item xs={12} className={classes.padding} >
                  <Typography gutterBottom align="center" variant="h4">Or,</Typography>
                  <center>
                    <Tooltip title="Click here to start your own meeting">
                      <Button variant="outlined" style={{justifyContent: 'center'}} color="primary" onClick={() => setstartnew(true)} startIcon={<Phone fontSize="large" />}   className={classes.margin}>
                        Start New Meeting
                      </Button>
                    </Tooltip>
                  </center>
                </Grid>
              </Grid>
            </form>
          </div>
          }

         
          {!(callAccepted && !callEnded)&&calling&&
          <div style={{padding: '100px'}}>
            <Grid container className={classes.gridContainer} >
              <Typography gutterBottom align="center" variant="h3">Please wait the host will let you in soon.</Typography>
            </Grid>
          </div>
          
          }
    
          {!(callAccepted && !callEnded)&&startnew&&
          <div style={{padding: '100px'}}>
            <Grid container className={classes.gridContainer} >
              <Typography gutterBottom align="center" variant="h6">Copy the invitation and send it to your friends, family and Colleague and ask them to join the meet.</Typography>
              <CopyToClipboard text={name +" is inviting you to join a video call meeting."+"\n"+ "\n"+"Click on the link  https://gyan-engage.netlify.app to join and enter the below code to join the conversation"+ "\n"+ "\n"+ "*Code :* " + me} className={classes.margin}>
                <Tooltip title="Click here to copy the invitation">
                  <Button variant="outlined" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                    Copy Invitation
                  </Button>
                </Tooltip>
              </CopyToClipboard>
              {children}
            </Grid>
          </div>
          }
      </Container>
    )
}

export default Options
