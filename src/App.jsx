import { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeWrapper from './Wrappers/HomeWrapper';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';
import { CartContextProvider } from './Context/ContextProvider';

function App() {
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.in/api/products?limit=4");
      const data = await response.json();
      return data.products; 
    } catch (error) {
      console.error(error);
      throw new Response("Failed to load products", { status: 500 }); 
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeWrapper />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: fetchProducts, 
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/blogs",
          element: <Blog />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
