import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm text={text} handleInput={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
