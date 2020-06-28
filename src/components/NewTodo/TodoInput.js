import React, { Component } from 'react';
import './TodoInput.css';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  inputHandler = (e) => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };
  
  submitHandler = () => {
    this.props.submit(this.state.input);
    this.setState({ input: ''});
  };

  render() {
    return (
      <div className='TodoInput'>
        <label htmlFor='new-todo'>New Todo</label>
        <input
          type='text'
          id='new-todo'
          value={this.state.input}
          onChange={this.inputHandler}
        />
        <button type='submit' onClick={this.submitHandler}>
          Add
        </button>
      </div>
    );
  }
}

export default TodoInput;
