/****************Importing Necessary Components ****************************/
import React from 'react';
import GoogleLogin from 'react-google-login';


const  Login =()=> {
  /****************If login is success then name and url is stored in local storage **************/
  
  const responseGoogle =(response) => {
    localStorage.setItem("name", response.profileObj.name);
    localStorage.setItem("email",response.profileObj.email);
    localStorage.setItem("url",response.profileObj.imageUrl);
    localStorage.setItem("issignedin",true);

    /************If users login first time then tere account for chat will be created ***************/
    var axios = require('axios');
    var data = {
      "username": localStorage.getItem("email"),
      "secret": "secret123",
      "email": localStorage.getItem("email"),
      
    };

    var config = {
      method: 'post',
      url: 'https://api.chatengine.io/users/',
      headers: {
        'PRIVATE-KEY': '4657445a-48d5-4c38-b235-b7d1272bbf4c'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    window.location.reload(); // reloading page to sync the login request
    
    
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