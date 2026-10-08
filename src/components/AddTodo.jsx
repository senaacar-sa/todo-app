import { useState } from "react";

function AddTodo({ onAdd }) {
  const [newText, setNewText] = useState("");

  function handleAdd() {
    if (newText.trim() !== "") {
      onAdd(newText);
      setNewText("");
    }
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAdd();
    }
  }

  return (
    <div className="add-row">
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Yeni görev yaz..."
      />
      <button onClick={handleAdd}>Ekle</button>
    </div>
  );
}

export default AddTodo;
