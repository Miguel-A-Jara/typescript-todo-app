import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, TodoState } from '../reducers/todoSlice';

const FormTodo = () => {

  const dispatch = useDispatch();
  const initialValue: TodoState = {title: '', desc: '', id: 0, isCompleted: false}
  const [formData, setFormData] = useState(initialValue);
  const [isFormIncomplete, setIsFormIncomplete] = useState(false);

  const handleSubmit = (e: React.FormEvent ) => {
    e.preventDefault();
    if(formData.title.trim().length < 2 || formData.desc.trim().length < 2) {
      setIsFormIncomplete(true)
      return;
    };

    dispatch(addTodo(formData));
    setFormData(initialValue);
    setIsFormIncomplete(false);
  }

  return (
    <form 
      className='bg-gradient-to-r from-blue-500 to-indigo-500 text-white flex flex-col flex-wrap items-center gap-2
      p-4 w-1/2'
      onSubmit={ handleSubmit }
      >
      <h1 className='text-center text-3xl'>Add Todos</h1>

      <input 
        type='text'
        name='title'
        value={formData.title}
        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
        className='input-form'
        placeholder='Todo Title'
        autoComplete='off'
      />

      <input 
        type='text'
        name='desc'
        value={formData.desc}
        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
        className='input-form'
        placeholder='Todo Description'
        autoComplete='off'
      />

      <button className='bg-white/50 p-2 rounded-md'>
        Submit
      </button>

      {
        <h2 
        className={`${isFormIncomplete ? 'animate-pulse' : 'opacity-0'} text-center text-red-500 font-bold`}>
          Complete the Form
        </h2> 
      }
    </form>
  )
}

export default FormTodo
