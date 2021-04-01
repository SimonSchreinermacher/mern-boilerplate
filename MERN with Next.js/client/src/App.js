import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Home from './components/Home.js';

function App(){
  return(
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
