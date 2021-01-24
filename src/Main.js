
import React, { Component } from "react";
import {
  Route, 
NavLink, 
HashRouter
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

 
class Main extends Component {
  render() {
    return (
    
        <HashRouter>
       
        <div>
          <h1>Project page</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
       
        </HashRouter>
       
    );
  }
}
 
export default Main;