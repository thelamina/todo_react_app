import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const todos = (props) => {
  const update = (id, updatedTask) => {
    props.updateTodo(id, updatedTask);
  };

  const remove = (id) => {
    props.deleteTodo(id);
  };

  const todos = props.items.map((todo) => {
    return (
      <TodoItem
        name={todo.task}
        key={todo.id}
        id={todo.id}
        edit={update}
        delete={remove}
      />
    );
  });

  return <div>{todos}</div>;
};

export default todos;
