import React, { Component } from 'react';
import './sign-up.css';
import EmailInput from './form-elements/email-input.jsx'
import FirstNameInput from './form-elements/first-name-input.jsx'
import LastNameInput from './form-elements/last-name-input.jsx'
import PasswordInput from './form-elements/password-input.jsx'
import PasswordRepeatInput from './form-elements/password-repeat-input.jsx'
import Role from './form-elements/role-input.jsx'
import SubmitButton from './form-elements/submit-button';
import { Link } from "react-router-dom";

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            password: '',
            passwordmatch: false,
            role: 'student'
        };
    }

    //General event handler. (Taken from React documentation)
    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    /*If the user enters two password that match the values from the form are saved 
    in the local storage as it acts as the back-end in this project for now.*/
    handleSignUp = (event) => {
        event.preventDefault();
        if (!this.state.passwordmatch) {
            alert("The form can not be submitted. The two passwords entered do not match.");
            return
        } else {
            alert("You are now signed up. Your information is now insecurely stored in local storage.");
            localStorage.setItem("email", this.state.email);
            localStorage.setItem("firstname", this.state.firstname);
            localStorage.setItem("lastname", this.state.lastname);
            localStorage.setItem("password", this.state.password);
            localStorage.setItem("role", this.state.role);
        }
    }

    //Reads password onChange and saves it to the state for later use
    handlePasswordChange = (event) => {
        let enteredPassword = event.target.value;
        this.setState({ password: enteredPassword });
    }

    //Checks if both passwords are the same, if so, return true
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
                        <SubmitButton buttonText="Sign up"/>
                    </fieldset>
                </form>
                <p>Already have an account? <Link to="/login">Log in here</Link></p>
            </div>
        );
    }
}

export default SignUpForm;