import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('https://practiceapi.devmountain.com/products').then(response => {
            this.setState({ products: response.data });
        })
    }

    render() {
        let products = this.state.products.map((e, i) => {
            if (e.image) {
                return (
                    <Link key={i} to={`/details/${e.id}`}>
                        <img width="200" src={e.image} />
                    </Link>
                );
            }
        });
        return (
            <div>
                <h1>Products</h1>
                {products}
            </div>
        )
    }
}

export default Products;