import logo from "../platzi.webp";
import { TodoCounter } from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../Createbutton";
import React from "react";
import { useLocalStorage } from "./useLocalStorage";
/* const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar curso', completed: false},
  {text: 'Llorar', completed: false},
  {text: 'other', completed: true},
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
*/

/* Create custom Hooks */

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState(""); //el actulizador es setSearchValue
  //console.log('los usuarios buscan todos de '+ searchValue);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  //estado derivado de todos
  const searchTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();

    return todoText.includes(searchText.toLocaleLowerCase());
  });
  console.log(searchTodos);

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const onDelete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  /*  const onDelete = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    setTodos(newTodos);
  }; */

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue} /* send State  */
        setSearchValue={setSearchValue}
      />

      <TodoList>
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

export default App;
