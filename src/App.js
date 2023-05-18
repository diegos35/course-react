import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { CreateTodoButton } from './Createbutton/CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar curso', completed: false},
  {text: 'Llorar', completed: false},
  {text: 'other', completed: true},
];


function App() {
   /* state initial */
   const [todos, setTodos] = React.useState(defaultTodos);
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
              />
          ))
          }
        </TodoList>
      
        <CreateTodoButton />
    </>
  );
}



export default App;
