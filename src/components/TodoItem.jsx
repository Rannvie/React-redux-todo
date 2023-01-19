import { useDispatch } from 'react-redux';
import { deleteTodo } from '../store/todoSlice';
import { toggleTodoComplete } from '../store/todoSlice';
import { RiDeleteBin2Line } from 'react-icons/ri';
import styles from './TodoItem.module.css';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.todo}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
      <span>{text}</span>
      <RiDeleteBin2Line
        className="deleteIcon"
        onClick={() => dispatch(deleteTodo({ id }))}
      />
    </li>
  );
};

export default TodoItem;
