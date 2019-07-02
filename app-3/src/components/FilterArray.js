import React, { Component } from 'react';

class FilterArray extends Component {
    constructor() {
        super();
        this.state = {
            listArray: ['chicken', 'lobster', 'steak', 'fish', 'cheesecake'],
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ userInput: e.target.value });
    }

    render() {
        let filteredArray = this.state.listArray
            .filter(e => {
                return e.includes(this.state.userInput);
            })
            .map((e, i) => {
                return <h2 key={i}>{e}</h2>
            })
        return (
            <div>
                <input onChange={this.handleChange} />
                {filteredArray}
            </div>
        )
    }
}

export default FilterArray;