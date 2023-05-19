import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { CreateTodoButton } from './Createbutton/CreateTodoButton';
import React from 'react';

/* const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar curso', completed: false},
  {text: 'Llorar', completed: false},
  {text: 'other', completed: true},
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

*/


function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parseTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parseTodos = [];
  }else{
    parseTodos = JSON.parse(localStorageTodos);
  }
  
  /* state initial */
   const [todos, setTodos] = React.useState(parseTodos);
   const [searchValue, setSearchValue] =  React.useState('');//el actulizador es setSearchValue
   //console.log('los usuarios buscan todos de '+ searchValue); 
  
  const completedTodos = todos.filter(
      todo => !!todo.completed
    ).length;
  const totalTodos = todos.length; 
  
  //estado derivado de todos
  const searchTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

      return todoText.includes(searchText.toLocaleLowerCase());
    }
  )
  console.log(searchTodos)
  
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text ==  text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    //setTodos(newTodos);
    saveTodos(newTodos);
  };

  const onDelete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text ==  text);
    newTodos.splice(todoIndex,1)
    //setTodos(newTodos);
    saveTodos(newTodos);
  }

 /*  const onDelete = (text) => {
    const newTodos = todos.filter((todo) => todo.text != text);
    setTodos(newTodos);
  }; */

  return (
      <>
        <TodoCounter 
          completed={completedTodos}
          total={totalTodos} />
        <TodoSearch 
          searchValue={searchValue} /* send State  */
          setSearchValue={setSearchValue}
        />

        <TodoList>
          { searchTodos.map((todo) =>( 
              <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)} //solo se va a ejecutar cuando suceda el evento
                onDelete={() =>{onDelete(todo.text)}}
              />
          ))
          }
        </TodoList>
      
        <CreateTodoButton />
    </>
  );
}



export default App;
