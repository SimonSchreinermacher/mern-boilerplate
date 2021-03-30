import React from 'react';
import axios from 'axios';

class Register extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username : "",
            password: "",
            email : "",
          }
    }

    handleSubmit(){
        let newUser = {name: this.state.username, password: this.state.password, email: this.state.email};
        axios.post("http://localhost:3001/user/register", newUser)
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
                <h1>Register:</h1>
                <form onSubmit = { this.handleSubmit.bind(this)}>
                    <div>
                        <p>Username:</p>
                        <input onChange={(e) => this.setState({username: e.target.value})}></input>
                    </div>
                    <div>
                        <p>Email:</p>
                        <input onChange={(e) => this.setState({email: e.target.value})}></input>
                    </div>
                    <div>
                        <p>Password:</p>
                        <input onChange={(e) => this.setState({password: e.target.value})}></input>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default Register;