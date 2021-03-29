import React from 'react';
import axios from 'axios';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username : "",
            password: "",
          }
    }

    handleSubmit(){
        let user = {name: this.state.username, password: this.state.password};
        axios.post("http://localhost:3001/user/login", user)
          .then(res => {
            console.log(JSON.stringify(res.data));
          })
          .catch(err => {
            console.log(err);
          })
      }

    render(){
        return(
            <div>
                <h1>Login:</h1>
                <form onSubmit = { this.handleSubmit.bind(this)}>
                    <div>
                        <p>Username:</p>
                        <input onChange={(e) => this.setState({username: e.target.value})}></input>
                    </div>
                    <div>
                        <p>Password:</p>
                        <input onChange={(e) => this.setState({password: e.target.value})}></input>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;