import React, { Component } from "react";
import "./App.css";

import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      r2d2: ''
    }
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/3').then(response => {
      this.setState({ r2d2: response.data })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.r2d2.name}</h1>
        <h1>Birth Year: {this.state.r2d2.birth_year}</h1>
        <h1>Gender: {this.state.r2d2.gender}</h1>
        <h1>Eye Color: {this.state.r2d2.eye_color}</h1>
      </div>
    );
  }
}

export default App;
