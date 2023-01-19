import TodoItem from './TodoItem';
const TodoList = ({ todos, deleteTodo, toggleTodoComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleTodoComplete={toggleTodoComplete}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
