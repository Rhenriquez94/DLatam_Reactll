

import { createContext, useState } from 'react';

export const CarritoContext = createContext();

// eslint-disable-next-line react/prop-types
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarAlCarrito = (pizza) => {
    const precio = parseFloat(pizza.price);
    if (!isNaN(precio)) {
      setCarrito([...carrito, pizza]);
      setTotal((prevTotal) => prevTotal + precio);
    } 
  };

  return (
    <CarritoContext.Provider value={{ carrito, total, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};