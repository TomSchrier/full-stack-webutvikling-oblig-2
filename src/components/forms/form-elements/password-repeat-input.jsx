import React, { Component } from 'react';

class PasswordRepeatInput extends Component {
    render() {
        return (
            <>
                <label for="psw-repeat">Repeat Password</label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
            </>
        );
    }
}

export default PasswordRepeatInput;