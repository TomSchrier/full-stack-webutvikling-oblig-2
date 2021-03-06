import React, { Component } from 'react';
import './password-repeat-input.css';

class PasswordRepeatInput extends Component {
    render() {
        return (
            <>
                <label htmlFor="passwordrepeat">Repeat Password</label>
                <input type="password" placeholder="Repeat Password" name="passwordrepeat" required onChange={this.props.handleRepeatPasswordChange}/>
            </>
        );
    }
}

export default PasswordRepeatInput;