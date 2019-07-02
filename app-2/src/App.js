import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: ['Nolan', 'John', 'Alex', 'Garrett']
    }
  }

  render() {
    let displayList = this.state.list.map(e => {
      return <h2>{e}</h2>
    })
    return (
      <div className="App">
        {displayList}
      </div>
    );
  }
}

export default App;
