import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar curso', completed: false},
  {text: 'Llorar', completed: false},
  {text: 'other', completed: false},
];


function App() {
  return (
      <>
        <TodoCounter completed={16} total={25} />
        <TodoSearch />

        <TodoList>
          { defaultTodos.map((todo) =>( 
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
