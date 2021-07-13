import React, { useContext } from 'react';

import {Button, Typography} from "@material-ui/core";
import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <div>
    <Typography gutterBottom align="center" variant="h4" style={{padding:40,}}>Waiting Room</Typography>
    
      {call.isReceivingCall && !callAccepted ? (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h5 style={{padding:10,paddingRight:70,}}>{call.name}  </h5>
  
          <Button variant="outlined" color="primary" onClick={answerCall}>
             Admit
          </Button>
        </div>
      ):(
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          No one is in the waiting room
        </div>
      )}
    </div>
  );
};

export default Notifications;

