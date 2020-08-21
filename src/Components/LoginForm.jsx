import React, { Component } from 'react';
class LoginForm extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
                <input type="text" name="username"></input>
                <input type="text" name="password"></input>
                <button>Submit</button>
            </form>
         );
    }
}
 
export default LoginForm;