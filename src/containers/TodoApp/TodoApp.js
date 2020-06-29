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

  AddTodoHandler = (value) => {
    this.setState({ todos: [...this.state.todos, { task: value, id: this.state.todos.length++ }] });
  };

  updateTodo = (id, updatedTask)=>{
    const updatedTodos = this.state.todos.map(todo=>{
      if(todo.id === id){
        return {...todo, task:updatedTask}
      }
      return todo;
    })
    this.setState({todos: updatedTodos})
  }
  
  deleteTodo =(id)=>{
    const updatedTodos = this.state.todos.filter(todo=> todo.id !== id)
    this.setState({ todos: updatedTodos });
  }

  render() {
    return (
      <div className='TodoApp'>
        <TodoInput submit={this.AddTodoHandler} name="Add" label="New Todo"/>
        <Todos items={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default TodoApp;
