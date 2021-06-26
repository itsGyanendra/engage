import React,{ useContext } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar"
import '../css/style.css';



const Profile = () =>{

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
        <div className ="container">
            <div className="row">
                <div className="col-12 col-sm-12 mx-auto">
                    <img src={localStorage.getItem("url")} className="rounded-circle"></img>
                </div>
            <div className="row">
                <div className="col-12">
             
                    Name : <input disabled type="text" value ={localStorage.getItem("name")} />
                </div>
                <div className="col-12 ">
                    Email : <input disabled type="text" value ={localStorage.getItem("email")} />
                </div>
            </div>
                
            </div>
            
        </div>
        </div>
        </div>
      
    );
}
export default Profile;