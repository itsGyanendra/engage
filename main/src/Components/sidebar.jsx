import React from 'react'
import '../css/style.css';
function sidebar() {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Dashboard</h3>
            </div>

            <ul className="list-unstyled components">
                <p></p>
                <li><a href="#">Home</a></li>
                <li><a href="#">Profile </a></li>
                <li><a href="#">Feedback</a></li>
                <hr/>
                <li><a href="">Logout</a></li>
            </ul>


        </nav>
    )
}

export default sidebar
