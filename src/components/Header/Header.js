import React, { useContext } from "react";
import styles from "./Header.module.css";
import { FaMoon, FaSun } from "react-icons/fa";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Header({ filter, filters, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header className={`${darkMode === true && styles.darkMode} ${styles.header}`}>
      <button className={styles.filter} onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> :<FaMoon />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              } ${darkMode && styles.darkMode}`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
