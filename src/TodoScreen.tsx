import React from 'react';
import FormTodo from './components/FormTodo';
import ListTodo from './components/ListTodo';

const TodoScreen = () => {
  return (
    <div className='flex h-screen'>

      <ListTodo />
      
      <FormTodo />
    </div>
  );
};

export default TodoScreen;