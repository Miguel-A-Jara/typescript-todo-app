import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoState{
  title: string;
  desc: string;
  id: number;
  isCompleted: boolean;
}

interface TodoSliceState {
  todos: TodoState[]
}

const initialState: TodoSliceState = {
  /* todos: [{title: '', desc: '', id: 0}], */
  todos: []
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state: TodoSliceState, action: PayloadAction<TodoState>) => {
      state.todos.push({...action.payload, id: new Date().getTime()});
    },

    remTodo: (state: TodoSliceState, action: PayloadAction<TodoState>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },

    toggleTodo: (state: TodoSliceState, action: PayloadAction<TodoState>) => {
      state.todos = state.todos.map((todo) => (
        todo.id === action.payload.id
          ? {...todo, isCompleted: !todo.isCompleted }
          : todo
      ));
    }
  }
});

export const { addTodo, remTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;