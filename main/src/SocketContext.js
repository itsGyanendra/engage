import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

//const socket = io('http://192.168.43.254:5000');
const socket = io('https://gyan-engage.herokuapp.com/');

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [screenshare, setscreenshare] = useState(false);
  const [screenstream, setscreenstream] = useState();
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
 
  
    useEffect(() => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((currentStream) => {
          setStream(currentStream);
  
          myVideo.current.srcObject = currentStream;
        });
  
      socket.on('me', (id) => setMe(id));
  
      socket.on('callUser', ({ from, name: callerName, signal }) => {
        setCall({ isReceivingCall: true, from, name: callerName, signal });
      });
    }, []);
    


  const videotoggle =() =>{
    stream.getVideoTracks()[0].enabled = !stream.getVideoTracks()[0].enabled
  };

  const audiotoggle =()=>{
    stream.getAudioTracks()[0].enabled = !stream.getAudioTracks()[0].enabled
  };
  const sharescreen =()=>{
    setscreenshare(true);
    navigator.mediaDevices.getDisplayMedia({cursor:true})
    .then(screenStream=>{
      setscreenstream(screenStream);
      if(connectionRef.current!=undefined){
        connectionRef.current.replaceTrack(stream.getVideoTracks()[0],screenStream.getVideoTracks()[0],stream)
      }
      
      myVideo.current.srcObject=screenStream
      screenStream.getTracks()[0].onended = () =>{
        setscreenshare(false);
        setscreenstream();
        if(connectionRef.current!=undefined){
          connectionRef.current.replaceTrack(screenStream.getVideoTracks()[0],stream.getVideoTracks()[0],stream)
        }
      myVideo.current.srcObject=stream
      }
    })
    
  }
  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });
    
    
    peer.signal(call.signal);
    
    connectionRef.current = peer;
    if(screenshare==true){
      connectionRef.current.replaceTrack(stream.getVideoTracks()[0],screenstream.getVideoTracks()[0],stream)
    }
    
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });
    
    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });
    
     
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      myVideo,
      videotoggle,
      audiotoggle,
      sharescreen,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      callUser,
      leaveCall,
      answerCall,
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };



/*import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
import { SentimentDissatisfiedSharp } from '@material-ui/icons';

const SocketContext = createContext();

//const socket = io('http://192.168.43.254:5000');
const socket = io('https://gyan-engage.herokuapp.com/');

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');
  const [senders, setSenders] = useState([]);

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((currentStream) => {
      setStream(currentStream);


      myVideo.current.srcObject = currentStream;
    })
    .catch(function(err) {
      console.log(err);
    });
    socket.on('me', (id) => setMe(id));
    
    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, []);
  const start =() =>{
   
  }
  const videotoggle =() =>{
    stream.getVideoTracks()[0].enabled = !stream.getVideoTracks()[0].enabled
  };

  const audiotoggle =()=>{
    stream.getAudioTracks()[0].enabled = !stream.getAudioTracks()[0].enabled
  };

  const sharescreen =()=>{
    navigator.mediaDevices.getDisplayMedia({ cursor: true }).then(currentStream => {
      const screenTrack = currentStream.getTracks()[0];
      setStream(currentStream);
      myVideo.current.srcObject = currentStream;
      
  });
}
  const answerCall = () => {
  
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });
    
    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  return (
    <SocketContext.Provider value={{
      start,
      call,
      callAccepted,
      myVideo,
      videotoggle,
      audiotoggle,
      sharescreen,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      callUser,
      leaveCall,
      answerCall,
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };*/
