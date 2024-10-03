import React, { createContext, useEffect, useState } from 'react';

export const CartData = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartData.Provider value={{ cart, setCart }}>
      {children}
    </CartData.Provider>
  );
};
