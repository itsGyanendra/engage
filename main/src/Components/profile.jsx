import React,{useContext} from 'react'
import '../App.js'
const profile = () => {
    const {details} = require('../App.js');
    console.log("sj"+ details.name)
    return (
        <div className ="container">
            <div className="row">
                <div className="col-12 col-sm-6 mx-auto">
                    <img src="" className="rounded-circle"></img>
                </div>
            <div className="row">
                <div className="col-12">
                    Name :
                </div>
                <div className="col-12 ">
                    Email : 
                </div>
            </div>
                
            </div>
            
        </div>
    )
}

export default profile
