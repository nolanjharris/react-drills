import React, { Component } from 'react';

class Image extends Component {
    constructor() {
        super();
        this.state = {
            url: 'https://data.whicdn.com/images/55693539/large.jpg'
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.url} />
            </div>
        )
    }
}

export default Image;