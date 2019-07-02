import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleUsername(e) {
        this.setState({ username: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    handleClick() {
        alert(`Username: ${this.state.username}  Password: ${this.state.password}`);
    }

    render() {
        return (
            <div>
                <input placeholder="username" onChange={this.handleUsername} />
                <input placeholder="password" onChange={this.handlePassword} />
                <button onClick={this.handleClick}>Login</button>
            </div>
        )
    }
}

export default Login;