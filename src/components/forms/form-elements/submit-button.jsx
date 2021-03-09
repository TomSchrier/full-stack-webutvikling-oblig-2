import React, { Component } from 'react';

class SubmitButton extends Component {
    render() {
        return (
            <button type="submit">{this.props.buttonText}</button>
        );
    }
}

export default SubmitButton