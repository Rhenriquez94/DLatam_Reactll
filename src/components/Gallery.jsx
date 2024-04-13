/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';
import imageData from '../photos.json';
import heartRegular from '../assets/icons/heart-regular.svg'
import heartSolid from '../assets/icons/heart-solid.svg'
import '../App.css';

const Gallery = () => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext); 

  const [imageDataArray, setImageDataArray] = useState([]);

  useEffect(() => {
 
    if (imageData && imageData.photos) {
      setImageDataArray(imageData.photos);
    }
  }, []);

  const handleToggleFavorite = (image) => {
    toggleFavorite(image); 
  };

  return (
    <>
      {imageDataArray.length > 0 ? (
        <div className="gallery">
          {imageDataArray.map((image, index) => (
            <div key={index}>
              <img src={image.src.original} alt={image.alt} />
              <button onClick={() => handleToggleFavorite(image)}>
                <img src={favorites.some(fav => fav.id === image.id) ? heartSolid :  heartRegular} alt="heart-icon"  style={{ width: '25px', height: '25px' }} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Gallery;
