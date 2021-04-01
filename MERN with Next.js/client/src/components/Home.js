import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {validToken, getUserFromToken} from './Authentication.js';

class Home extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        username: ""
      }
    }

    getAllEntries(e){
        e.preventDefault();

        if(validToken()){
          axios.get('/api/user')
          .then((res) => {
            for(let x of res.data){
              console.log(x);
            }
          })
          .catch((err) => {
            console.log(err);
          })
        }
      }

    componentDidMount(){
        const username = getUserFromToken();
        this.setState({username: username});
    }

    render(){
        if(validToken()){
          return(
            <div>
                <h1>Welcome, {this.state.username}</h1>
                <form onSubmit={this.getAllEntries.bind(this)}>
                    <button type="submit">Get all entries</button>
                </form>
            </div>
          );
        }
        else{
          return(
            <Redirect to="/login"></Redirect>
          );
        }
        
    }
}

export default Home;