import React, { Component } from 'react';
import EmailInput from './form-elements/email-input.jsx'
import FirstNameInput from './form-elements/first-name-input.jsx'
import LastNameInput from './form-elements/last-name-input.jsx'
import PasswordInput from './form-elements/password-input.jsx'
import PasswordRepeatInput from './form-elements/password-repeat-input.jsx'
import Role from './form-elements/role-input.jsx'
import { Link } from "react-router-dom";

import './sign-up.css';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            role: 'student',
            password: '',
            passwordmatch: false
        };
    }

    //General event handler. (Stolen from React documentation)
    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    //saved the entered data to the local storage becayse it act as a back end
    handleSignUp = (event) => {
        event.preventDefault();
        if (!this.state.passwordmatch) {
            alert("The form can not be submitted. The two passwords entered do not match.");
            return
        } else {
            alert("You are now signed up. Your information is now insecurely stored in local storage.");
            localStorage.setItem("firstname", this.state.firstname);
            localStorage.setItem("lastname", this.state.lastname);
            localStorage.setItem("email", this.state.email);
            localStorage.setItem("role", this.state.role);
            localStorage.setItem("password", this.state.password);
        }
    }

    //Reads password on change and saves it to the state 
    handlePasswordChange = (event) => {
        let enteredPassword = event.target.value;
        this.setState({ password: enteredPassword });
    }

    //Checks if both passwords are the same
    handleRepeatPasswordChange = (event) => {
        let enteredRepeatPassword = event.target.value;
        let storedPassord = this.state.password;

        if (enteredRepeatPassword === storedPassord) {
            this.setState({ passwordmatch: true });
        } else {
            this.setState({ passwordmatch: false });
        }
    }

    render() {
        return (
            <div className="SignUpForm">
                <form action="#" onSubmit={this.handleSignUp}>
                    <fieldset>
                        <legend>Sign up</legend>
                        <FirstNameInput handleInputChange={this.handleInputChange} />
                        <LastNameInput handleInputChange={this.handleInputChange} />
                        <EmailInput handleEmailChange={this.handleInputChange} />
                        <Role handleInputChange={this.handleInputChange} />
                        <PasswordInput handlePasswordChange={this.handlePasswordChange} />
                        <PasswordRepeatInput handleRepeatPasswordChange={this.handleRepeatPasswordChange} />
                        <button type="submit">Sign up</button>
                    </fieldset>
                </form>
                <p>Already have an account? <Link to="/login">Log in here</Link></p>
            </div>
        );
    }
}

export default SignUpForm;