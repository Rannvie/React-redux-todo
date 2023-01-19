import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          text,
          completed: false,
        },
      ]);
      setText('');
    }
  };

  const toggleTodoComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <TodoForm text={text} handleInput={setText} handleSubmit={addTodo} />

      <TodoList
        todos={todos}
        toggleTodoComplete={toggleTodoComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
