import logo from "../platzi.webp";
import { TodoCounter } from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../Createbutton";
import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";
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
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
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
  //console.log(searchTodos);

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
      <AppUI
        loading={loading}
        error={error}
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchTodos={searchTodos}
        onDelete={onDelete}
        completeTodo={completeTodo}
      />
    </>
  );
}

export default App;
