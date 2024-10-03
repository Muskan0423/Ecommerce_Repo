import React, { useEffect, useState } from 'react';
import { Carousel } from "@material-tailwind/react";

const Slider = () => {
 

  return (
    <Carousel className="rounded-xl ">
    <img
      src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309649.jpg?t=st=1727949471~exp=1727953071~hmac=d04f69b3c390e0d0cbf94d336ddfc47be941649a690eba7d0da53bb7152d7565&w=1380"
      alt="image 1"
      className=" w-full object-cover"
    />
    
  </Carousel>
  );
};

export default Slider;
