import React, { Component } from 'react';

class Role extends Component {
    render() {
        return (
            <>
                <label htmlFor="role">Role:</label>
                <select name="role" id="role" onChange={this.props.handleInputChange}>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
            </>
        );
    }
}

export default Role;