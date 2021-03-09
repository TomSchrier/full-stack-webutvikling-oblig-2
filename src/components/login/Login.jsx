import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import EmailInput from '../forms/form-elements/email-input';
import PasswordInput from '../forms/form-elements/password-input.jsx';

import { Link } from "react-router-dom";

import './Login.css';

//This component is implementing more than one functionality only for academic purposes.
//If the app is connected to a Backend, the auth logic should be implemented in a different file (SOLID)
class Login extends Component {
    render() {

        if (this.props.redirect) {
            return <Redirect to={this.props.redirect} />
        }

        return (
            <>
                {!this.props.isAuth && <>
                    <div className="LogInForm">
                        <form action="#" onSubmit={this.props.handleLogIn}>
                            <fieldset>
                                <legend>Log In</legend>
                                <EmailInput />
                                <PasswordInput />
                                <button type="submit">Log in</button>
                            </fieldset>
                        </form>
                        <p>Dont have an account yet? <Link to="/signup">Sign up here</Link></p>
                        <Link to="/forgotpassword">Forgot password?</Link>
                    </div>
                </>}

                {this.props.isAuth && <><p>You're logged in.</p><Link to="/user">Visit your user page here.</Link></>}
            </>
        );
    }
}

export default Login;