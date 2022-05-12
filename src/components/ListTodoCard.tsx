import React from 'react';
import { useDispatch } from 'react-redux';
import { TodoState, remTodo } from '../reducers/todoSlice';
import ListTodoCardButton from './ListTodoCardButton';

interface TodoProps {
  todo: TodoState
}

const ListTodoCard = ({todo}: TodoProps) => {

  const { title, desc } = todo;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(remTodo(todo));
  };

  return (
    <div className='bg-pink-500/50 rounded-lg p-4'>
      <h2 className='text-center text-3xl font-bold'>{ title }</h2>
      <p className='text-justify text-xl font-extralight'>{ desc }</p>
      <button onClick={ handleDelete }>
        Delete
      </button>

      <ListTodoCardButton todo={ todo } />
    </div>
  );
};

export default ListTodoCard;