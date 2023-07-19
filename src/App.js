import "./App.css";
import React, { useContext, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { DarkModeContext, DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const filters = ['all', 'active', 'completed']
  const [filter, setFilter] = useState(filters[0])
  return (
    <DarkModeProvider>
      <Header filter={filter} filters={filters} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;