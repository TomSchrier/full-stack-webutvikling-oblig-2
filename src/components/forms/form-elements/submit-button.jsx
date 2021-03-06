import React, { Component } from 'react';

class SubmitButton extends Component {
    render() {
        let buttonText = this.props.buttonText
        return (
            <>
                <button type="submit" className="submit-button">{buttonText}</button>
            </>
        );
    }
}

export default SubmitButton;