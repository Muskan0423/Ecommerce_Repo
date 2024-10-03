import React, { useContext, useEffect, useState } from 'react';
import { CartData } from '../Context/ContextProvider';

const Cart = () => {
  const { cart, setCart } = useContext(CartData);
  const [currency, setCurrency] = useState('USD'); 
  const [conversionRates, setConversionRates] = useState({ USD: 1, INR: 75, AUD: 1.3 }); 
  const [total, setTotal] = useState(0);
  console.log(cart,"cart");
  

  useEffect(() => {
   
    const fetchConversionRates = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); 
        const data = await response.json();
        setConversionRates(data.rates);
      } catch (error) {
        console.error('Failed to fetch conversion rates:', error);
      }
    };

    fetchConversionRates();
  }, []);

  useEffect(() => {
   
    const baseTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(baseTotal * (conversionRates[currency] || 1));
  }, [cart, currency, conversionRates]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; 
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
      <h2 className="text-5xl font-bold mb-4">Cart</h2>

     
      <div className=" mb-4 w-1/6" >
        <select value={currency} onChange={handleCurrencyChange} className="border rounded px-9 py-5 font-bold text-xl">
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="AUD">AUD</option>
        </select>
      </div>
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>{item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded mr-2"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded ml-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Total: {currency} {total.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
