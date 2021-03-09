import React, { Component } from 'react';

class PasswordInput extends Component {
    render() {
        return (
            <>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" name="password" pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}" title="Must contain at least one number and one letter, and at least 8 or more characters" required onChange={this.props.handlePasswordChange} />
            </>
        );
    }
}

export default PasswordInput;