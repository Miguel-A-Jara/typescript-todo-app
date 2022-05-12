import React from 'react';
import { useDispatch } from 'react-redux';
import { TodoState, toggleTodo } from '../reducers/todoSlice';

interface ButtonProps {
  todo: TodoState;
}

const ListTodoCardButton = ({ todo }: ButtonProps) => {

  const dispatch = useDispatch();


  const handleToggle = () => {
    dispatch(toggleTodo(todo));
  };

  return (
    <div className='toggle-btn' onClick={ handleToggle }>
      <div 
        className={`${todo.isCompleted ? 'bg-green-500' : 'bg-red-500'}
          h-full aspect-square bg-green-500 rounded-full transition-all duration-300`}>

      </div>
    </div>
  );
};

export default ListTodoCardButton;