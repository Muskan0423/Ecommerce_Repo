import React, { useContext } from 'react'
import FeaturedProduct from '../Components/FeaturedProduct'
import Slider from '../Components/Slider'
import { CartData } from '../Context/ContextProvider'

const Home = () => {
    const {cart}=useContext(CartData)
    console.log(cart,"cartatata");
    
  return (
   <>
   
   <Slider/>
   <FeaturedProduct Cart={cart}/>
   </>
  )
}

export default Home
