import React, { useContext, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./TodoItem.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function TodoItem({ todo, onUpdate, onDelete, filter }) {
  const [checked, setChecked] = useState(false);
  const handlechecked = (e) => {
    setChecked(!checked);
    onUpdate({ ...todo, status: e.target.checked ? "completed" : "active" });
  };
  const {darkMode} = useContext(DarkModeContext)
  if (filter !== "all" && todo.status !== filter) return;
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={handlechecked}
        id={`checkbox${todo.id}`}
      />
      <label className={`${darkMode && styles.darkMode} ${styles.text}`} htmlFor={`checkbox${todo.id}`}>
        {todo.text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={() => onDelete(todo)}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
