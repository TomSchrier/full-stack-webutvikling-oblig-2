import React, { Component } from 'react';
import './Logout.css';
import { Link } from "react-router-dom";

class Logout extends Component {

    /*The HTML is conditionally rendered based on the isAuct the component retrieved in its props. 
    If the user is logged out a link is provided. If the user is logged in a Log-Out button is provided*/
    render() {
        return (
            <div className="Logout">
                {!this.props.isAuth && <><p>You are now logged out.</p><Link to="/">Go Home</Link></>}
                {this.props.isAuth && <button onClick={this.props.handleLogOut}>Log Out</button>}
            </div>
        );
    }
}

export default Logout;