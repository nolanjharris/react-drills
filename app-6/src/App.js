import React, { Component } from "react";
import Todo from './components/Todo';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      userInput: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState({ todos: [...this.state.todos, this.state.userInput], userInput: '' })
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value })
  }

  render() {
    let todoList = this.state.todos.map((e, i) => {
      return <Todo key={i} task={e} />
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input placeholder="what do you need to-do?" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
        {todoList}
      </div>
    );
  }
}

export default App;
