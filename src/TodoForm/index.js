import React from "react";
import "./TodoForm.css";

function TodoForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); //evita reload
      }}
    >
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder="Create TODO" />
      <div className="container-button">
        <button type="" className="TodoForm-button TodoForm-button--cancel">
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
