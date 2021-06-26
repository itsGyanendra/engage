import React from 'react'
import { GoogleLogout } from 'react-google-login';

import '../css/style.css';
const responseGoogle = (response) => {
    console.log(response);
  }
function sidebar() {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Dashboard</h3>
            </div>

            <ul className="list-unstyled components">
                <p></p>
                <li><a href="../">Home</a></li>
                <li><a href="../profile">Profile </a></li>
                <li><a href="../feedback">Feedback</a></li>
                <hr/>
                <li><GoogleLogout
      clientId="1035288128112-brh215ffu1r8fm2noa92anr1iuhdsu1l.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={()=>{localStorage.clear();window.location.reload();}}
    >
    </GoogleLogout></li>
            </ul>
            



        </nav>
    )
}

export default sidebar
