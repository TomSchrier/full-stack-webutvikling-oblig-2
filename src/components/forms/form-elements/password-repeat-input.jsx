import React, { Component } from 'react';
import './password-repeat-input.css';

class PasswordRepeatInput extends Component {
    render() {
        return (
            <>
                <label htmlFor="psw-repeat">Repeat Password</label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required onChange={this.props.handleRepeatPasswordChange}/>
                
                <div className="passwordrequirments">
                    <p>The password must consist of:</p>
                    <ul>
                        <li>minimum eight characters</li>
                        <li>letters</li>
                        <li>numbers</li>
                    </ul>
                </div>
            </>
        );
    }
}

export default PasswordRepeatInput;