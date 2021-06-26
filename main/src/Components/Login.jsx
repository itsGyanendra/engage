
import React,{useState, useContext} from 'react';
import GoogleLogin from 'react-google-login';
import { BrowserRouter as Redirect} from "react-router-dom";


const  Login =()=> {
  const responseGoogle =(response) => {
    localStorage.setItem("name", response.profileObj.name);
    localStorage.setItem("email",response.profileObj.email);
    localStorage.setItem("url",response.profileObj.imageUrl);
    localStorage.setItem("issignedin",true);
    window.location = "/profile"
    
  }
  if(localStorage.getItem("issignedin")){
    return (
      <meta http-equiv="refresh"
        content="0; url = /profile" /> 
    );
  }
  return (

        <GoogleLogin
        clientId="1035288128112-brh215ffu1r8fm2noa92anr1iuhdsu1l.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        isSignedIn={true}
       
        cookiePolicy={'single_host_origin'}
      />
  
  );

}

export default Login;