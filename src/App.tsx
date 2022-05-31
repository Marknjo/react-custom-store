import React, { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ProductsPage from './pages/ProductsPage';
import FavoritesPage from './pages/FavoritesPage';
import ProductList from './components/Layouts/ProductList';

const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<ProductList />}>
            <Route
              index
              element={
                <ProductsPage
                  id={''}
                  title={''}
                  description={''}
                  children={undefined}
                />
              }
            />
            <Route
              path="favorites"
              element={
                <FavoritesPage
                  id={''}
                  title={''}
                  description={''}
                  children={undefined}
                />
              }
            />
          </Route>
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default App;
