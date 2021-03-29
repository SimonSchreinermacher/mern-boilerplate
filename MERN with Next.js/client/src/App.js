import './App.css';
import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Home from './components/Home.js';

/*class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name : "",
      password: "",
      email : "",
      userData : []
    }
  }

  handleSubmit(){
    let newUser = {name: this.state.name, password: this.state.password, email: this.state.email};
    axios.post("http://localhost:3001/user", newUser)
      .then(res => {
        console.log(JSON.stringify(res.data));
      })
      .catch(err => {
        console.log(err);
      })
  }

  getAllEntries(){
    axios.get("http://localhost:3001/user")
      .then((res) => {
        this.setState({userData: res.data});
        for(let x of this.state.userData){
          console.log(x);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render(){
    return (
      <div className="App">
        <form onSubmit={this.getAllEntries.bind(this)}>
          <button type="submit">Get all entries</button>
        </form>
        <form onSubmit = { this.handleSubmit.bind(this)}>
          <div>
            <p>Name:</p>
            <input onChange={(e) => this.setState({name: e.target.value})}></input>
          </div>
          <div>
            <p>Password:</p>
            <input onChange={(e) => this.setState({password: e.target.value})}></input>
          </div>
          <div>
            <p>Email:</p>
            <input onChange={(e) => this.setState({email: e.target.value})}></input>
          </div>
          <button type="submit">Add to database</button>
        </form>
      </div>
    );
  }
}*/

function App(){
  return(
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
