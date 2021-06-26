
import React,{ useState,createContext, Component, } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

import Profilepage from "./pages/profilepage"
import Meet from "./pages/meet";
import Loginpage from "./pages/index";
import HomePage from "./pages/home"
import Feedback from "./pages/feedback"
class App extends Component {
  render(){
    return (
   
        <Router>
          <Switch>
          <Route exact path="/" component={Loginpage}></Route>
          <Route exact path="/home" component= {HomePage}/>
          <Route exact path="/profile" component= {Profilepage}/>
          <Route exact path="/meet" component= {Meet}/>
          <Route exact path="/feedback" component= {Feedback}/>
          
          </Switch>
        </Router>
      
    );
  }
}


export default App;



