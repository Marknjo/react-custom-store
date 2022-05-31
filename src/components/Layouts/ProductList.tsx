import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './ProductList.module.css';

function ProductList() {
  return (
    <ul className={styles.list}>
      {/* Geet the page content */}
      <Outlet />
    </ul>
  );
}

export default ProductList;
