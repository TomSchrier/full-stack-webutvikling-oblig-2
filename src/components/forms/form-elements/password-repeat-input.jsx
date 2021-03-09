import React, { Component } from 'react';

class PasswordRepeatInput extends Component {
    render() {
        return (
            <>
                <label htmlFor="passwordrepeat">Repeat Password</label>
                <input type="password" placeholder="Repeat Password" name="passwordrepeat" pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}" title="Must contain at least one number and one letter, and at least 8 or more characters" required onChange={this.props.handleRepeatPasswordChange}/>
            </>
        );
    }
}

export default PasswordRepeatInput;