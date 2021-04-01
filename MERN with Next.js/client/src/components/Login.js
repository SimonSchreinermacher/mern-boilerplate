import React from 'react';
import axios from 'axios';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email : "",
            password: "",
          }
    }

    handleSubmit(e){
        e.preventDefault();

        let user = {email: this.state.email, password: this.state.password};
        axios.post('/api/user/login', user)
          .then(res => {
            console.log(res.data.token)
            localStorage.setItem('jwtToken', res.data.token);
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

export default Login;