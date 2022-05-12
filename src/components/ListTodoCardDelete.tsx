import React from 'react';
import { remTodo, TodoState } from '../reducers/todoSlice';
import { useDispatch } from 'react-redux';
import { BsTrash } from 'react-icons/bs';

interface DeleteProps {
  todo: TodoState
}

const ListTodoCardDelete = ({ todo }: DeleteProps) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(remTodo(todo));
  };

  return (
    <div 
      onClick={ handleDelete }
      className='bg-white text-red-500 border-4 border-white h-14 aspect-square rounded-full flex justify-center items-center cursor-pointer hover:bg-red-500 hover:text-white
      transition-all duration-300'
    >
      <BsTrash className='text-3xl'/>
    </div>
  );
};

export default ListTodoCardDelete;