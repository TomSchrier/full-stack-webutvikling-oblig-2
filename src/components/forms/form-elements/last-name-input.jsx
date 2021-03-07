import React, { Component } from 'react';

class LastNameInput extends Component {
    render() {
        return (
            <>
                <label htmlFor="lastname">Last name</label>
                <input type="text" placeholder="Last name" name="lastname" required onChange={this.props.handleInputChange}></input>
            </>
        );
    }
}

export default LastNameInput;