import React, { Component } from 'react';
import {HashRouter as Router, Route, Link, Switch} from "react-router-dom" 
import logo from './logo.svg';

import Layouts from './pages/Layouts'
import Login from './pages/Login'
import SZScreen from './pages/SZScreen'

import './assets/css/reset.css'
import 'antd/dist/antd.css'; 

class App extends Component {
  render() {
    return (
      <Router>
           <Switch>
             <Route  path="/login" component={Login}/>
             <Route path="/szscreen"  component={SZScreen} />
             <Route path="/"  component={Layouts}/>
             
           </Switch>
      </Router>
    );
  }
}

export default App;
