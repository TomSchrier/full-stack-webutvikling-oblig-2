import React, { Component } from 'react';
import './forgot-password.css';
import EmailInput from './form-elements/email-input'
import SubmitButton from './form-elements/submit-button'

class ForgotPassword extends Component {
    render() {
        return (
            <>
                <p>You will receive an email that will help you create a new password for your account.</p>
                <div className="ForgotPasswordForm">
                    <form action="#">
                        <fieldset>
                            <legend>Forgot Password</legend>
                            <EmailInput />
                            <SubmitButton buttonText="Reset password"/>
                        </fieldset>
                    </form>
                </div>
            </>
        );
    }
}

export default ForgotPassword;