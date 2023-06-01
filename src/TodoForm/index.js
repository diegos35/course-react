import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubimit = (event) => {
    event.preventDefault(); //evita reload
    addTodo(newTodoValue.trim());
    setOpenModal(false);
  };

  const onCancel = (event) => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubimit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Create TODO"
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="container-button">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
