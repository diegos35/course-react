import React from 'react'

function TodoCounter({total, completed}) {
  return (
    <h1>
        Has completado {completed} de {total }
        TODOS
    </h1>
  )
}

//export default TodoCounter
export { TodoCounter }