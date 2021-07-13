
import React,{Component, } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Meetpage from "./pages/meet";
import Loginpage from "./pages/index";
import Faq from "./pages/faq";
import Contact from "./pages/contact";
class App extends Component {
  render(){
    return (
   
        <Router>
          <Switch>
          <Route exact path="/" component={Loginpage}></Route>
          <Route exact path="/meet" component= {Meetpage}/>
          <Route exact path="/faq" component= {Faq}/>
          <Route exact path="/contact" component= {Contact}/>
          
          </Switch>
        </Router>
      
    );
  }
}


export default App;



