import React, { Component } from 'react';

class SubmitButton extends Component {
    render() {
        let buttonText = this.props.buttonText

        return (
                <button disabled={this.props.disabled} onClick={this.props.handleLogIn}>{buttonText}</button>
        );
    }
}

export default SubmitButton;