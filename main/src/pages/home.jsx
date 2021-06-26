import React,{ useState,createContext, } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import { Typography, AppBar } from "@material-ui/core";
import {makeStyles } from "@material-ui/core/styles";
import { ScreenCapture } from 'react-screen-capture';
import Sidebar from "../Components/sidebar";

import '../css/style.css';
import Navbar from '../Components/navbar';
import { ContextProvider } from '../SocketContext';



const Homepage =()=> {
  return (
   <div></div>
  
  );

}

export default Homepage;