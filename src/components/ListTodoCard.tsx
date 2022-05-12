import React from 'react';
import { TodoState, } from '../reducers/todoSlice';
import ListTodoCardButton from './ListTodoCardButton';
import ListTodoCardDelete from './ListTodoCardDelete';

interface TodoProps {
  todo: TodoState
}

const ListTodoCard = ({todo}: TodoProps) => {

  const { title, desc } = todo;

  return (
    <div className={`${ todo.isCompleted ? 'bg-green-500' : 'bg-red-500' } rounded-lg p-4 transition-all duration-300`}>
      <h2 className='text-center text-3xl font-bold truncate'>{ title }</h2>
      <hr />
      <p className='text-justify text-xl font-extralight truncate'>{ desc }</p>

      <div className='flex justify-around pt-4'>
        <ListTodoCardDelete todo={ todo } />

        <ListTodoCardButton todo={ todo } />
      </div>
    </div>
  );
};

export default ListTodoCard;