import React, { useEffect, useState } from 'react';
import { Carousel } from "@material-tailwind/react";

const Slider = () => {
 

  return (
    <>
    <section id="hero-video">
        <video autoplay loop muted poster="/Images/cf_poster.jpg">
            <source src="Videos/slideshow.mp4" type="video/mp4"/>
        </video>
    </section>

<section class="header">
    <nav>
        <a href="Index.html" id="logo"><img src="Images/cflogo_main.png"/></a>
        <div class="nav_links" id="navLinks">
            <i class="fa fa-window-close" onclick="hideMenu()"></i>
            
        </div>
        <i class="fa fa-bars" onclick="showMenu()"></i>
    </nav>
   
</section>
</>
  );
};

export default Slider;
