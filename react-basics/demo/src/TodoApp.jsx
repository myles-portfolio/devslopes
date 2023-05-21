import React from "react";
import TodoList from "./TodoList";

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = { text: '', items: [] };
  }
  
  handleChange = (e) => this.setState({ text: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      text: this.state.text,
      id: Date.now(),
    }

    this.setState((state) => ({
      items: /*state.items.concat(newItem)*/ [...state.items, newItem],
      text: '',
    }))
  }

  render() {
    return (
      <div className="App">
        <h2>TODO</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="newTask">
            What needs to be done?
          </label>
          <br />
          <input 
            onChange={this.handleChange} 
            type="text" 
            autoComplete="off"
          />
          <button>Add Task</button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    )
  }
}

export default TodoApp;