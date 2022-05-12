import React from 'react';
import { useDispatch } from 'react-redux';
import { TodoState, toggleTodo } from '../reducers/todoSlice';
import { VscError } from 'react-icons/vsc';
import { AiOutlineCheckCircle } from 'react-icons/ai';

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
      <div className={`
        ${ todo.isCompleted ? 'bg-green-500 translate-x-10' : 'bg-red-500 translate-x-0'} 
          h-full aspect-square flex justify-center items-center rounded-full transition-all duration-300`}>

        {
          todo.isCompleted 
            ? <AiOutlineCheckCircle className='text-3xl' /> 
            : <VscError className='text-3xl'/>
        }
        

      </div>
    </div>
  );
};

export default ListTodoCardButton;