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
  const [name, setName] = useState(localStorage.getItem("name"));
  const [call, setCall] = useState({});
  const [calling, setCalling] = useState(false);
  const [startnew, setstartnew] = useState(false);
  const [me, setMe] = useState('');
  const [aud, setAud] = useState(true);
  const [vid, setVid] = useState(true);
  const [note, setnote] = useState(true);
  const [showchat, setshowchat] = useState(true);


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
      setMe(socket.id);
      socket.on('callUser', ({ from, name: callerName, signal }) => {
        setCall({ isReceivingCall: true, from, name: callerName, signal });
      });
    }, []);
    
  const showchattoggle=()=>{
    if(showchat===false){
      setshowchat(true);
    }
    else{
      setshowchat(false);
    }
  }

  const videotoggle =() =>{
    if(vid===false){
      setVid(true);
      
    }
    else{
      setVid(false);
      
    }
    stream.getVideoTracks()[0].enabled = !stream.getVideoTracks()[0].enabled
  };

  const audiotoggle =()=>{
    if(aud===false){
      setAud(true);
    }
    else{
      setAud(false);
    }
    stream.getAudioTracks()[0].enabled = !stream.getAudioTracks()[0].enabled
  };
  const notetoggle =()=>{
    if(note===false){
      setnote(true);
    }
    else{
      setnote(false);
    }
  };
  const sharescreen =()=>{
    
    navigator.mediaDevices.getDisplayMedia({cursor:true})
    .then(screenStream=>{
      setscreenstream(screenStream);
      if(connectionRef.current!==undefined){
        connectionRef.current.replaceTrack(stream.getVideoTracks()[0],screenStream.getVideoTracks()[0],stream)
        
      }
      
      myVideo.current.srcObject=screenStream
      setscreenshare(true);
      screenStream.getTracks()[0].onended = () =>{
        setscreenshare(false);
        setscreenstream();
        if(connectionRef.current!==undefined){
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
    if(screenshare===true){
      connectionRef.current.replaceTrack(stream.getVideoTracks()[0],screenstream.getVideoTracks()[0],stream)
    }
    
  };

  const callUser = (id) => {
    setCalling(true);
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
      calling,
      callAccepted,
      myVideo,
      videotoggle,
      audiotoggle,
      sharescreen,
      startnew,
      setstartnew,
      screenshare,
      aud,
      vid,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      note,
      showchat,
      showchattoggle,
      notetoggle,
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


