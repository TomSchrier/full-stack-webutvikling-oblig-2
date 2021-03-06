import React, { Component } from 'react';

class PasswordInput extends Component {
    render() {
        return (
            <>
                <label for="psw">Password</label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
            </>
        );
    }
}

export default PasswordInput;