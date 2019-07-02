import React, { Component } from 'react';

class ShowText extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ userInput: e.target.value });
    }
    render() {
        console.log(this.state.userInput);
        return (
            <div>
                <input onChange={this.handleChange} />
                <h3>{this.state.userInput}</h3>
            </div >
        )
    }
}

export default ShowText;