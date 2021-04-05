import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {validToken} from './Authentication.js';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email : "",
            password: "",
            error: false
          }
    }

    handleSubmit(e){
        e.preventDefault();
        let user = {email: this.state.email, password: this.state.password};
        axios.post('/api/user/login', user)
          .then(res => {
            localStorage.setItem('jwtToken', res.data.token);
            this.props.history.push('/');
          })
          .catch(err => {
            console.log(err);
            if(err.response.status === 400){
                this.setState({error: true});
            }
          })
      }

    render(){
        let errorMessage;
        if(this.state.error){
            errorMessage = <p>Email or password incorrect!</p>;
        }
        if(validToken()){
            return(
                <Redirect to="/"></Redirect>
            );

        }
        else{
            return(
                <div>
                    {errorMessage}
                    <h1>Login:</h1>
                    <form onSubmit = { this.handleSubmit.bind(this)}>
                        <div>
                            <p>Email:</p>
                            <input onChange={(e) => this.setState({email: e.target.value})}></input>
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
}

export default Login;