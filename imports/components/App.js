import React, { Component } from "react";
import Todo from "./Todo.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['Buy milk', 'Go to the gym', 'Call the insurence']
    };
  }



  listTodos() {
    return this.state.todos.map(todo => <Todo todo={todo} />);
  }

  render() {
    return (
      <div>
        <h3>Todos:</h3>
        <ul>{this.listTodos()}</ul>
      </div>
    );
  }
}
