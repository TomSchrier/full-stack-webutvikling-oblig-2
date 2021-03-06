import React, { Component } from 'react';

class EmailInput extends Component {
    render() {
        return (
            <>
                <label for="email">Email</label>
                <input type="email" placeholder="Enter Email" name="email" required></input>
            </>
        );
    }
}

export default EmailInput;