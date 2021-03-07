import React, { Component } from 'react';

class FirstNameInput extends Component {
    render() {
        return (
            <>
                <label htmlFor="firstname">First name</label>
                <input type="text" placeholder="First name" name="firstname" required onChange={this.props.handleInputChange}></input>
            </>
        );
    }
}

export default FirstNameInput;