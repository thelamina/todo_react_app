import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

const todos=(props)=> {
  const todos = props.items.map((todo)=>{
    return(
      <TodoItem name={todo.task} key={todo.id}/>
    );
  })
  return (
    <div>
      {todos}
    </div>
  )
}

export default todos
