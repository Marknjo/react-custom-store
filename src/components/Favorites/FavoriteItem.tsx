import React from 'react';
import { BaseProps } from '../../types/base-props';
import { ProductItemDescription } from '../../types/product-item-description';

import Card from '../UI/Card';
import styles from './FavoriteItem.module.css';

const FavoriteItem = (props: ProductItemDescription) => {
  const {} = props;

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className={styles['favorite-item']}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};

export default FavoriteItem;
