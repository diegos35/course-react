import React from 'react'
import "./TodoList.css";


function TodoList(props) {
  return (
    <ul className="todo-list"> 
        { props.children }
    </ul>
  )
}

export default TodoList
