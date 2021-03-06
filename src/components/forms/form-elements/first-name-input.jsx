import React, { Component } from 'react';

class FirstNameInput extends Component {
    render() {
        return (
            <>
                <label htmlFor="firstName">First name</label>
                <input type="text" placeholder="First name" name="firstName" required onChange={this.props.handleFirstNameChange}></input>
            </>
        );
    }
}

export default FirstNameInput;