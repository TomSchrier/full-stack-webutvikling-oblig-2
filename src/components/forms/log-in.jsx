import React, { Component } from 'react';
import EmailInput from './form-elements/email-input.jsx'
import PasswordInput from './form-elements/password-input.jsx'
import SubmitButton from './form-elements/submit-button.jsx'
import './log-in.css';

class LogInForm extends Component {
    render() {
        return (
            <div className="LogInForm">
                <form>
                    <fieldset>
                    <legend>Log In</legend>
                        <EmailInput />
                        <PasswordInput />
                        <SubmitButton buttonText="Log In"/>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default LogInForm;