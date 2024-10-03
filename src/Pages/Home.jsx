
import React, { useContext, useEffect, useState } from 'react';
import FeaturedProduct from '../Components/FeaturedProduct';
import { CartData } from '../Context/ContextProvider';
import Slider from '../Components/Slider';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const { cart, setCart } = useContext(CartData);
  const {products}=useLoaderData()



  return (
    <>
    <Slider/>
    <div className='mt-5'>
      <FeaturedProduct products={products} cart={cart} setCart={setCart} />
      </div>
    </>
  );
}

export default Home;
