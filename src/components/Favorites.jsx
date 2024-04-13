/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';

import '../App.css';




const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className='gallery'>
      {favorites.map((favorite) => (
        <div key={favorite.id}>
          <img src={favorite.src.original} alt={favorite.alt} />
        </div>
      ))}
    </div>
  );
};

export default Favorites;
