import React from 'react';
import './TodoItem.css';

const todoItem = (props) => {
  return (
    <div className='Todo-Item'>
      <p>{props.name}</p>
      <button className="Edit">Edit</button>
      <button className="Delete">Delete</button>
    </div>
  );
};

export default todoItem;
