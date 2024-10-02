import { createContext, useState } from 'react';

export const CartData = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 

  return (
    <CartData.Provider value={{ cart, setCart }}> 
    {children}
    </CartData.Provider>
  );
};
