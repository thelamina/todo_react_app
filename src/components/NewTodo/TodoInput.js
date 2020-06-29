import React, { Component } from 'react';
import './TodoInput.css';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.input,
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
        <label htmlFor='new-todo'>{this.props.label}</label>
        <input
          type='text'
          id='new-todo'
          value={this.state.input}
          
          onChange={this.inputHandler}
        />
        <button type='submit' onClick={this.submitHandler}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default TodoInput;
