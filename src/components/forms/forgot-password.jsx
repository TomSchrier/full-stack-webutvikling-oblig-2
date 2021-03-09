import React, { Component } from 'react';
import EmailInput from './form-elements/email-input.jsx'
import './forgot-password.css';

class ForgotPassword extends Component {
    render() {
        return (
            <>
                <p>You will receive an email that will help you create a new password for your account.</p>
                <div className="ForgotPasswordForm">
                    <form>
                        <fieldset>
                            <legend>Forgot Password</legend>
                            <EmailInput />
                            <button>Reset Password</button>
                        </fieldset>
                    </form>
                </div>
            </>
        );
    }
}

export default ForgotPassword;