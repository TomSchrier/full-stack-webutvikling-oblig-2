import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import LogInForm from '../forms/log-in';

import './Login.css';

//This component is implementing more than one functionality only for academic purposes.
//If the app is connected to a Backend, the auth logic should be implemented in a different file (SOLID)
class Login extends Component {

    render() {
        
        if (this.props.redirect) {
            return <Redirect to={this.props.redirect} />
        }

        return (
            <div className="Login">
                {!this.props.isAuth && <button onClick={this.props.handleLogIn}>Log In</button>}
                {this.props.isAuth && <button onClick={this.props.handleLogOut}>Log Out</button>}
                <LogInForm/>
            </div>
        );
    }
}

export default Login;