import React, { Component } from 'react';

class SubmitButton extends Component {
    render() {
        let buttonText = this.props.buttonText
        return (
            <>
                <button type="submit" disabled={this.props.disabled}>{buttonText}</button>
            </>
        );
    }
}

export default SubmitButton;