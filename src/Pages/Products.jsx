import React, { useContext, useEffect, useState } from 'react';
import CardComponent from '../Components/CardComponent';
import { CartData } from '../Context/ContextProvider';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
  const { cart, setCart } = useContext(CartData);
  const productsAll = useLoaderData();

  const [currency, setCurrency] = useState('USD');
  const [conversionRates, setConversionRates] = useState({ USD: 1, INR: 75, AUD: 1.3 });

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

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-4xl ml-9 font-bold mt-4">Products</h3>

        <div className="mb-4 w-1/6">
          <select value={currency} onChange={handleCurrencyChange} className="border rounded px-9 py-5 font-bold text-xl">
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="AUD">AUD</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {productsAll.map((product) => {
          const convertedPrice = (product.price * conversionRates[currency]).toFixed(2); 
          return (
            <CardComponent key={product.id} product={{ ...product, price: convertedPrice }} cart={cart} setCart={setCart} />
          );
        })}
      </div>
    </>
  );
}

export default Products;
