import { TodoCounter } from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../Createbutton";

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchTodos,
  onDelete,
  completeTodo,
}) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue} /* send State  */
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && <p> Estamos cargando...</p>}
        {error && <p> Error...</p>}
        {!loading && searchTodos.completeTodo === 0 && (
          <p> Crea tu primer todo</p>
        )}
        {searchTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)} //solo se va a ejecutar cuando suceda el evento
            onDelete={() => {
              onDelete(todo.text);
            }}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
