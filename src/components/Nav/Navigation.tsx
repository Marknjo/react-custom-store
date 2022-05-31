import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">All Products</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
