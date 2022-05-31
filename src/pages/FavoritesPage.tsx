import React from 'react';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import { BaseProps } from '../types/base-props';
import { ProductItemDescription } from '../types/product-item-description';

const Favorites = (props: ProductItemDescription) => {
  // const {id, title, description} = props;

  let content = <p className="placeholder">Got no favorites yet!</p>;
  // if (favoriteProducts.length > 0) {
  //    content = (
  //   <ul className="products-list">
  //     {favoriteProducts.map(prod => (
  //       <FavoriteItem
  //         key={prod.id}
  //         id={prod.id}
  //         title={prod.title}
  //         description={prod.description}
  //       />
  //     ))}
  //   </ul>
  //   <li>Product List</li>
  // );

  // }
  return content;
};

export default Favorites;
