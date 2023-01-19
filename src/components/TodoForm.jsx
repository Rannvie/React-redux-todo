const TodoForm = ({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <input
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
};

export default TodoForm;
