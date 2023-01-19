import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);

      state.todos.push({
        id: uuidv4(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodoComplete(state, action) {},
    deleteTodo(state, action) {},
  },
});

export const { addTodo, toggleTodoComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
