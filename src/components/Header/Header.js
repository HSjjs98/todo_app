import React, { useContext } from "react";
import styles from './Header.module.css'
import { DarkModeContext } from "../../context/DarkModeContext";
import {FaMoon} from 'react-icons/fa'

export default function Header({ filter, filters, onFilterChange }) {
  // const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header className={styles.header}>
      <FaMoon />
      <ul className={styles.filters}> 
        {filters.map((value, index) => (
          <li key={index}>
            <button className={`${styles.filter} ${filter === value && styles.selected}`} onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
