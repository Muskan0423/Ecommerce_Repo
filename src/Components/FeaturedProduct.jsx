// src/Components/FeaturedProduct.js
import React from 'react';
import CardComponent from './CardComponent';

const FeaturedProduct = ({ products, cart, setCart }) => {
  return (
    <>
    <h3 className='text-4xl font-bold text-cyan-700 text-center mb-3'>Featured Components</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
     
      {products.map((product) => (
        <CardComponent key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
    </>
  );
};

export default FeaturedProduct;
