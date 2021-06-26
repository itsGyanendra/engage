import React,{ useState,createContext, } from 'react';
import { Typography, AppBar } from "@material-ui/core";
import Options from "../Components/Options";
import Notifications from "../Components/Notifcations";
import Sidebar from "../Components/sidebar";
import VideoPlayer from "../Components/VideoPlayer";
import '../css/style.css';
import Navbar from '../Components/navbar';
import RecordView from '../Components/recording';
import { ContextProvider } from '../SocketContext';



const Meet =()=> {
  if(!localStorage.getItem("issignedin")){
    console.log("ss");
    return (

      <meta http-equiv="refresh"
        content="0; url = /" /> 
    );
  }
  return (
    <ContextProvider>
       <div className="wrapper">
       <Sidebar/>
       <div id="content">
         <Navbar/>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>
      </AppBar>
      <VideoPlayer/>
      <RecordView/>
      <Options>
      <Notifications/>
      </Options>
       </div>  
    </div>
  </ContextProvider>
  
  );

}

export default Meet;