import "./App.css";
import React, { useContext, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";

function App() {
  const filters = ['all', 'active', 'completed']
  const [filter, setFilter] = useState(filters[0])
  return (
    <>
      <Header filter={filter} filters={filters} onFilterChange={setFilter} />
      <TodoList filter={filter}/>
    </>
  );
}

export default App;