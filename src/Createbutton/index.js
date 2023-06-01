import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
  const createTodo = (e) => {
    console.log(e.target);
  };
  return (
    <button
      className="CreateTodoButton  "
      onClick={() => setOpenModal((state) => !state)}
    >
      +
    </button>
  );
}

//export default CreateTodoButton
export { CreateTodoButton };
