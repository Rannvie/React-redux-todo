import { RiDeleteBin2Line } from 'react-icons/ri';

const TodoItem = ({ id, text, completed, deleteTodo, toggleTodoComplete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>{text}</span>
      <RiDeleteBin2Line className="deleteIcon" onClick={() => deleteTodo(id)} />
    </li>
  );
};

export default TodoItem;
