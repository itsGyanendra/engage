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



function feedbacksubmit(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx7xmKLO9cTeCexr9_fQwR78Etv5x2EqANhhZ-_8o8waSaQsyh2zTIjk2ZhgfAtEFDD/exec'
const form = document.forms['google-sheet']
console.log(form);
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("You have successfully submitted."))
    .catch(error => console.error('Error!', error.message))

}

const Feedback =()=> {
  if(!localStorage.getItem("issignedin")){
    return (
      <meta http-equiv="refresh"
        content="0; url = /" /> 
    );
  }
  return (
    <div className="wrapper">
    <Sidebar/>
    <div id="content">
      <Navbar/>
    <form method="post" autocomplete="off" name="google-sheet">
         Name: <input type="text" name="Name" value={localStorage.getItem("name")}  /><br/> 
         Email: <input type="email" name="Email" value={localStorage.getItem("email")} /><br/>
         Comments: <textarea type="text" name="Comments" placeholder="Enter your feedback here" rows="5" cols="50"/><br/>
        
    </form>
    <button onClick={() => feedbacksubmit()}>Submit</button>
    </div>
    </div>
  );

}


export default Feedback;