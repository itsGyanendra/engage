import React, { useState } from 'react';
import {Button,} from "@material-ui/core";
import '../css/style.css';
import { ContextProvider} from '../SocketContext';
import Meet from '../Components/meet';
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import  ChatUI  from "../Components/chat";

const Meetpage =()=> {
  const[showmeet, setshowmeet] =useState(false);
  if(!localStorage.getItem("issignedin")){
    console.log("ss");
    return (

      <meta http-equiv="refresh"
        content="0; url = /" /> 
    );
  }

  return (
    <>
    {showmeet?(
    <ContextProvider>
         <AnimationRevealPage>
         <Meet/>
      </AnimationRevealPage>
      </ContextProvider>
      ):(
        <>
        <Button variant="outlined" style={{justifyContent: 'center'}} color="primary" onClick={()=>setshowmeet(!showmeet)}>Start / Join meet</Button>
  
        <ChatUI/>
        
        </>
      )}
      </>
      
      
      
  
  );

}

export default Meetpage;