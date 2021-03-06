import React, { Component } from 'react';
import EmailInput from './form-elements/email-input.jsx'
import PasswordInput from './form-elements/password-input.jsx'
import PasswordRepeatInput from './form-elements/password-repeat-input.jsx'
import SubmitButton from './form-elements/submit-button.jsx'
import './sign-up.css';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.email);
    }

    //Reads email on change and saves it to the state
    handleEmailChange = (event) => {
        let enteredEmail = event.target.value;
        this.setState({ email: enteredEmail });
    }

    //Reads password on change and saves it to the state if longer than 8 
    handlePasswordChange = (event) => {
        let enteredPassword = event.target.value;
        this.setState({ password: enteredPassword });
    }

    //Checks if both passwords are the same, if so, enable the submit button
    handleRepeatPasswordChange = (event) => {
        let enteredRepeatPassword = event.target.value;
        let storedPassord = this.state.password;

        if (enteredRepeatPassword === storedPassord) {
            console.log("match");
        } else {
            console.log("password to not match");
        }
    }

    render() {
        return (
            <div className="SignUpForm">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Sign up</legend>
                        <EmailInput handleEmailChange={this.handleEmailChange} />
                        <PasswordInput handlePasswordChange={this.handlePasswordChange} />
                        <PasswordRepeatInput handleRepeatPasswordChange={this.handleRepeatPasswordChange} />
                        <SubmitButton buttonText="Sign up"/>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default SignUpForm;