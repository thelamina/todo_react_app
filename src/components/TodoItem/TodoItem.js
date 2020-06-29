import React, { Component } from 'react';
import TodoInput from '../NewTodo/TodoInput';
import './TodoItem.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      completed: false,
      task: this.props.name,
    };
  }

  editHandler = () => {
    this.setState({ isEditing: true });
  };

  deleteHandler = () => {
    this.props.delete(this.props.id);
  };

  updateHandler = (task) => {
    this.props.edit(this.props.id, task);
    this.setState({ isEditing: false });
  };

  taskCompleted = () => {
    this.setState({ completed: !this.state.completed });
  };

  render() {
    return this.state.isEditing ? (
      <TodoInput
        name='Save'
        label='Edit Todo'
        submit={this.updateHandler}
        input={this.state.task}
      />
    ) : (
      <div className='Todo-Item'>
        <p
          onClick={this.taskCompleted}
          className={this.state.completed ? 'completed' : ''}
        >
          {this.props.name}
        </p>
        {!this.state.completed && (
          <button className='Edit' onClick={this.editHandler}>
            Edit
          </button>
        )}
        <button className='Delete' onClick={this.deleteHandler}>
          X
        </button>
      </div>
    );
  }
}

export default TodoItem;
