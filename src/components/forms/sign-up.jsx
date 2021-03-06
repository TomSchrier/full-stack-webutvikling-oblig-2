import React, { Component } from 'react';
import EmailInput from './form-elements/email-input.jsx'
import PasswordInput from './form-elements/password-input.jsx'
import PasswordRepeatInput from './form-elements/password-repeat-input.jsx'
import SubmitButton from './form-elements/submit-button.jsx'
import './sign-up.css';

class SignUpForm extends Component {
    render() {
        return (
            <div className="SignUpForm">
                <form>
                    <fieldset>
                    <legend>Sign up</legend>
                        <EmailInput />
                        <PasswordInput />
                        <PasswordRepeatInput />
                        <SubmitButton buttonText="Sign up"/>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default SignUpForm;