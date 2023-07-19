import React, { useContext, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoItem from "../TodoItem/TodoItem";
import styles from './TodoList.module.css'
import { DarkModeContext } from "../../context/DarkModeContext";

export default function TodoList({filter}) {
  const [todos, setTodos] = useState([
    { id: "1", text: "달리기", status: "active" },
    { id: "2", text: "공부하기", status: "active" },
    { id: "3", text: "설거지하기", status: "active" },
  ]);
  const handleAdd = (todo) => {
    setTodos((todos) => todos.concat(todo));
  };
  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <section className={`${darkMode === true && styles.darkMode} ${styles.container}`}>
        <ul className={styles.list}>
          {todos.map((item) => (
            <TodoItem
              filter={filter}
              key={item.id}
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
        <AddTodo onAdd={handleAdd} />
      </section>
    </>
  );
}
