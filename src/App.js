import React, { Component } from 'react';

import Navbar from './Components/navbar';
import User from './Components/user';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/user" component={User}  />
          <Redirect from="/user" to="navbar" />
        </Switch>
      </React.Fragment>
     );
  }
}
 
export default App;
 