import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Logout.css';

class Logout extends Component {

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