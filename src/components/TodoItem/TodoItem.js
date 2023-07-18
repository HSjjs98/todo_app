import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function TodoItem({ todo, onUpdate, onDelete, filter }) {
  const [checked, setChecked] = useState(false);
  const handlechecked = (e) => {
    setChecked(!checked);
    onUpdate({ ...todo, status: e.target.checked ? "completed" : "active" });
  };
  if(filter !== 'all' && todo.status !== filter) return;
  return (
    <li>
      <input
        type="checkbox"
        checked={checked}
        onChange={handlechecked}
        id={`checkbox${todo.id}`}
      />
      <label htmlFor={`checkbox${todo.id}`}>{todo.text}</label>
      <button onClick={() => onDelete(todo)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
