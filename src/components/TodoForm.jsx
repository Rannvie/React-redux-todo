import styles from './TodoForm.module.css';

const TodoForm = ({ text, handleInput, handleSubmit }) => {
  return (
    <div className={styles.todoFormContainer}>
      <label>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => handleInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </label>
    </div>
  );
};

export default TodoForm;
