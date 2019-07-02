import React, { Component } from 'react';

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({ userInput: e.target.value })
    }

    handleClick() {
        this.props.add(this.state.userInput);
        this.setState({ userInput: '' });
    }

    render() {
        return (
            <div>
                <input placeholder="What do you need to do?" onChange={this.handleChange} />
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

export default NewTask;