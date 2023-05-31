import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <h1 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos}
      TODOS
    </h1>
  );
}

//export default TodoCounter
export { TodoCounter };
