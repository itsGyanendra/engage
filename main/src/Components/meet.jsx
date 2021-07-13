import React,{useContext,} from 'react';
import Options from "./Options(2)";
import Notifications from "./Notifcations";

import VideoPlayer from "./VideoPlayer";
import '../css/style.css';
import { SocketContext} from '../SocketContext';
import Note  from './notes';
import  ChatUI  from "./chat";
import Header from "./headers/light2.js";
import Header1 from "./headers/light.js";


const Meet =()=> {
  const { callAccepted, callEnded, note, showchat} = useContext(SocketContext);
  
  
  return (
    <>

         { callAccepted && !callEnded?(
        <Header />):(<Header1/>)
         }
      <VideoPlayer>
      
      <Options>
      <Notifications/>
      </Options>
      </VideoPlayer>
      
      { note&&
      <Note/>
      }
      { showchat &&
      <ChatUI/>
      }
      </>
  
  );

}

export default Meet;