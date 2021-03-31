import React from 'react';
import axios from 'axios';

class Home extends React.Component {

    getAllEntries(){
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

    render(){
        return(
            <div>
                <h1>Welcome, PROPS_USER</h1>
                <form onSubmit={this.getAllEntries.bind(this)}>
                    <button type="submit">Get all entries</button>
                </form>
            </div>
        );
    }
}

export default Home;