import React from 'react'
import CardComponent from './CardComponent'

const FeaturedProduct = (cart) => {
    console.log(cart);
    
  return (
    <div>
        {cart.map((element)=>{
            <div key={element.id}>
                 <CardComponent/>
</div>

        })}
   
    </div>
  )
}

export default FeaturedProduct
