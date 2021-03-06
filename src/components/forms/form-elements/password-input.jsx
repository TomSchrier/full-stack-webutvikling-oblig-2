import React, { Component } from 'react';

class PasswordInput extends Component {
    render() {
        return (
            <>
                <label htmlFor="psw">Password</label>
                <input type="password" placeholder="Enter Password" name="psw" required onChange={this.props.handlePasswordChange} />
            </>
        );
    }
}

export default PasswordInput;