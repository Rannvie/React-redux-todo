import { RiDeleteBin2Line } from 'react-icons/ri';
import styles from './TodoItem.module.css';

const TodoItem = ({ id, text, completed, deleteTodo, toggleTodoComplete }) => {
  return (
    <li className={styles.todo}>
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
