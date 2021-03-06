import React, { Component } from 'react';
import EmailInput from './form-elements/email-input.jsx'

import SubmitButton from './form-elements/submit-button.jsx'
import './forgot-password.css';

class ForgotPassword extends Component {
    render() {
        return (
            <div className="ForgotPasswordForm">
                <form>
                    <fieldset>
                    <legend>Forgot Password</legend>
                        <EmailInput />
                        <SubmitButton buttonText="Reset Password"/>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default ForgotPassword;