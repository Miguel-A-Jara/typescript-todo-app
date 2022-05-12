import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ListTodoCard from './ListTodoCard';


const ListTodo = () => {

  const { todos } = useSelector((state: RootState) => state.todo);
  
  return (
    <div className='bg-gradient-to-r from-pink-500 to-blue-500 w-1/2 p-8 text-white'>
      {
        /* The "ul" element is only rendered when we have a todo in our 'todos state' */
        todos.length > 0 &&
        <ul className='h-full bg-white/50 shadow-lg shadow-black/25 rounded-lg p-4 flex flex-col gap-4 overflow-y-scroll'>
          {
            todos.map(todo => (
              <ListTodoCard key={ todo.id } todo={ todo } />
            )) 
          }
        </ul>

      }
    </div>
  );
};

export default ListTodo;