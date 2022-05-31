import React from 'react';
import { BaseProps } from '../../types/base-props';
import { ProductItemDescription } from '../../types/product-item-description';

import Card from '../UI/Card';
import styles from './ProductItem.module.css';

const ProductItem = (props: ProductItemDescription) => {
  const toggleFavHandler = () => {
    //dispatch(toggleFav(props.id));
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className={styles.item}>
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {/* {props.isFav ? 'Un-Favorite' : 'Favorite'} */}
          Favorite
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
