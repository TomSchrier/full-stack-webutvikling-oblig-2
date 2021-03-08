import React, { Component } from 'react';
import EmailInput from './form-elements/email-input.jsx'
import './forgot-password.css';

class ForgotPassword extends Component {
    render() {
        return (
            <div className="ForgotPasswordForm">
                <form>
                    <fieldset>
                    <legend>Forgot Password</legend>
                        <EmailInput />
                        <button>Reset Password</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default ForgotPassword;