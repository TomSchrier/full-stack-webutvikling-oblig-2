import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {

    isLinkSet(linkName) {
        return this.props.links.find(elem => elem === linkName);
    }

    render() {
        return (
            <>
                <nav>
                    <ul>
                        {this.isLinkSet('home') && <li><Link to="/">Home</Link></li>}
                        {this.isLinkSet('user') && <li><Link to="/user">User home</Link></li>}
                        {this.isLinkSet('dashboard') && <li><Link to="/dashboard">Dashboard</Link></li>}
                        {this.isLinkSet('login') && <li><Link to="/login">Log in</Link></li>}
                        {this.isLinkSet('logout') && <li><Link to="/logout">Log out</Link></li>}
                    </ul>
                </nav>
            </>
        );
    }
}

Nav.defaultProps = {
    links: ['home', 'login']
};

export default Nav;