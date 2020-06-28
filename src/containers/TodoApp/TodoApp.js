import React, { Component } from 'react';
import Todos from '../../components/Todo/Todos';
import TodoInput from '../../components/NewTodo/TodoInput';
import './TodoApp.css';

export class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  submitHandler = (value) => {
    this.setState({ todos: [...this.state.todos, { task: value, id: this.state.todos.length++ }] });
  };

  render() {
    return (
      <div className='TodoApp'>
        <TodoInput submit={this.submitHandler} />
        <Todos items={this.state.todos} />
      </div>
    );
  }
}

export default TodoApp;
