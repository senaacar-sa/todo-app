

function TodoItem({ done, text, onDelete, onToggle }) {
 

  return (
    <li className="todo-item">
      <span
      className={done ? 'done todo-text': 'todo-text'} 
      onClick={onToggle}
      >
        {done ? "✅" : "⬜"} {text}
      </span>
      <button className="delete-btn" onClick={onDelete}>🗑️</button>
    </li>
  );
}
export default TodoItem;
