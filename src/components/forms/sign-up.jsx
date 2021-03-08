import React, { Component } from 'react';
import EmailInput from './form-elements/email-input.jsx'
import FirstNameInput from './form-elements/first-name-input.jsx'
import LastNameInput from './form-elements/last-name-input.jsx'
import PasswordInput from './form-elements/password-input.jsx'
import PasswordRepeatInput from './form-elements/password-repeat-input.jsx'
import Role from './form-elements/role-input.jsx'
import { Link } from "react-router-dom";

import './sign-up.css';
import { emailIsValid } from './../../utils/validateEmail.js';
import { passwordIsValid } from './../../utils/validatePassword.js';
//import { allTrue } from './../../utils/allTrue.js';

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

    //General event handler. No validation before saving value in state (used for firstname, lastname and role) (Stolen from React documentation)
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
        alert("You are submitting");
        localStorage.setItem("firstname", this.state.firstname);
        localStorage.setItem("lastname", this.state.lastname);
        localStorage.setItem("email", this.state.email);
        localStorage.setItem("role", this.state.role);
        localStorage.setItem("password", this.state.password);
    }

    //Reads email on change and saves it to the state if it is a valid email
    handleEmailChange = (event) => {
        let enteredEmail = event.target.value;

        if (emailIsValid(enteredEmail)) {
            this.setState({ email: enteredEmail });
        }
    }

    //Reads password on change and saves it to the state if longer than 8 
    handlePasswordChange = (event) => {
        let enteredPassword = event.target.value;

        if (passwordIsValid(enteredPassword)) {
            this.setState({ password: enteredPassword });
        } else {
            this.setState({ password: '' });
        }
    }

    //Checks if both passwords are the same
    handleRepeatPasswordChange = (event) => {
        let enteredRepeatPassword = event.target.value;
        let storedPassord = this.state.password;

        if (enteredRepeatPassword === storedPassord) {
            console.log("match");
            this.setState({ passwordmatch: true });
        } else {
            console.log("password to not match");
            this.setState({ passwordmatch: false });
        }
    }

    /*componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            if(allTrue(this.state)){
                console.log("all true");
                this.setState({ buttonDisabled: false });
            } else {
                console.log("something is false or empty");
            };
        }
    }*/

    render() {
        return (
            <div className="SignUpForm">
                <form onSubmit={this.handleSignUp}>
                    <fieldset>
                        <legend>Sign up</legend>
                        <FirstNameInput handleInputChange={this.handleInputChange} />
                        <LastNameInput handleInputChange={this.handleInputChange} />
                        <EmailInput handleEmailChange={this.handleEmailChange} />
                        <Role handleInputChange={this.handleInputChange} />
                        <PasswordInput handlePasswordChange={this.handlePasswordChange} />
                        <PasswordRepeatInput handleRepeatPasswordChange={this.handleRepeatPasswordChange} />
                        <button type="button" disabled={this.state.buttonDisabled}>Sign up</button> 
                    </fieldset>
                </form>
                <p>Already have an account? <Link to="/login">Log in here</Link></p>
            </div>
        );
    }
}

export default SignUpForm;