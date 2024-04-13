/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';


export const FavoritesContext = createContext();


// eslint-disable-next-line react/prop-types
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (image) => {
    
    const index = favorites.findIndex((fav) => fav.id === image.id);

    if (index !== -1) {
      const newFavorites = [...favorites];
      newFavorites.splice(index, 1);
      setFavorites(newFavorites);
    } else {
    
      setFavorites([...favorites, image]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};