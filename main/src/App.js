
import React,{ useState,createContext, } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import { Typography, AppBar } from "@material-ui/core";
import {makeStyles } from "@material-ui/core/styles";
import './App.css';
import VideoPlayer from "./Components/VideoPlayer";
import Options from "./Components/Options";
import Notifications from "./Components/Notifcations";
import { ScreenCapture } from 'react-screen-capture';
import Sidebar from "./Components/sidebar";
import Profile from "./Components/profile";
import './css/style.css';
import Navbar from './Components/navbar';



function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [url,setUrl] =useState("");
  const [issignedin,setissignedin] =useState(false);
  var details ={
    name :""
  };
  const responseGoogle =(response) => {
    setissignedin(true);
    details.name = response.profileObj.name
    console.log("s" +details.name);
    setName(response.profileObj.name);
    
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  }
  module.exports = {details};
  return (
    <div>
      {!issignedin&&(
        <GoogleLogin
        clientId="1035288128112-brh215ffu1r8fm2noa92anr1iuhdsu1l.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        isSignedIn={true}
       
        cookiePolicy={'single_host_origin'}
      />
      )}
      

 
    
    
       <div className="wrapper">
       <Sidebar/>
       <div id="content">
         <Navbar/>
         <GoogleLogin
        clientId="1035288128112-brh215ffu1r8fm2noa92anr1iuhdsu1l.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        isSignedIn={true}
       
        cookiePolicy={'single_host_origin'}
      />
       <GoogleLogout
      clientId="1035288128112-brh215ffu1r8fm2noa92anr1iuhdsu1l.apps.googleusercontent.com"
      buttonText="Logout" >
    </GoogleLogout>
    <Profile/>
      <img src={url} alt={name}/>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>
      </AppBar>
      <VideoPlayer/>
      <Options>
      <Notifications/>
      </Options>
       </div>
     

      
    </div>
  

 
  </div>
  
  );

}

export default App;



