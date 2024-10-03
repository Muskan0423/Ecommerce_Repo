import React, { useState } from 'react';

const CardComponent = ({ product, cart, setCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false); 

  
  const addToCart = () => {
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + quantity } : item
      ));
    } else {
     
      setCart([...cart, { ...product, quantity }]);
    }

   
    setIsInCart(true);
  
  };

  return (
    <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 flex flex-col">
      <div className="relative w-full flex justify-center items-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full rounded-t-lg"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h1 className="text-xl font-semibold dark:text-gray-50">{product.title}</h1>
        <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">{product.price}</div>
        <div className="flex items-center mt-4">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2 py-1 border rounded">-</button>
          <span className="mx-2">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="px-2 py-1 border rounded">+</button>
        </div>
        <button
          type="button"
          className={`mt-4 py-2 ${isInCart ? "bg-gray-400" : "bg-cyan-700 hover:bg-cyan-700"} focus:ring-indigo-500 text-white w-full transition duration-200 rounded-lg`}
          onClick={addToCart}
          disabled={isInCart} 
        >
          {isInCart ? "Added to Cart" : "Buy now"}
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
