import React, { Component } from 'react';

class PasswordInput extends Component {
    render() {
        return (
            <>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" name="password" required onChange={this.props.handlePasswordChange} />
            </>
        );
    }
}

export default PasswordInput;