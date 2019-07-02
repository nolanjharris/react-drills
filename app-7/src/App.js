import React, { Component } from "react";
import NewTask from './components/NewTask';
import List from './components/List';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: []
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState({ todoList: [...this.state.todoList, task] })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.todoList} />
      </div>
    );
  }
}

export default App;
