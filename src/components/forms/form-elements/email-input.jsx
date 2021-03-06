import React, { Component } from 'react';

class EmailInput extends Component {
    render() {
        return (
            <>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter Email" name="email" required onChange={this.props.handleEmailChange}></input>
            </>
        );
    }
}

export default EmailInput;