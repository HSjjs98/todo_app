import React, { useContext, useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoItem from "../TodoItem/TodoItem";
import styles from './TodoList.module.css'
import { DarkModeContext } from "../../context/DarkModeContext";

export default function TodoList({filter}) {
  const readTodosFromLocalStorage = () => {
    const todos = localStorage.getItem('todos')
    return todos ? JSON.parse(todos): []
  }
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
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
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
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
