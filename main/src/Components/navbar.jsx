import React from 'react'

function navbar() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i className="fas fa-align-left"></i>
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">dd
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                  <li><a href="#">Profile</a></li>
                                  <li><a href="">Logout</a></li>

                                </ul>
                              </li>
                        </ul>
                    </div>
                </div>
            </nav>
           
            </div>
    )
}

export default navbar
