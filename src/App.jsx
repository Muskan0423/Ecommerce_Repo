import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeWrapper from './Wrappers/HomeWrapper';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';
import { CartContextProvider } from './Context/ContextProvider';
import BlogWrapper from './Wrappers/BlogWrapper';
import SingleBlog from './Pages/SingleBlog';

const fetchApi = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts"; 
  const response = await fetch(url);
  if (!response.ok) throw new Response('Failed to fetch posts', { status: 500 });
  const data = await response.json();
  return data; 
};
const fetchAllProducts = async () => {
  const url = "https://fakestoreapi.in/api/products"; 
  const response = await fetch(url);
  if (!response.ok) throw new Response('Failed to fetch posts', { status: 500 });
  const data = await response.json();
  return data.products; 
};
const fetchHome = async () => {
  const url = "https://fakestoreapi.in/api/products?limit=4"; 
  const response = await fetch(url);
  if (!response.ok) throw new Response('Failed to fetch posts', { status: 500 });
  const data = await response.json();
  return data; 
};
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeWrapper />,
      children: [
        {
          index: true,
          element: <Home />,
          loader:fetchHome
        },
        {
          path: "/products",
          element: <Products />,
          loader:fetchAllProducts
        },
        {
          path: "/blogs",
          element: <BlogWrapper />,
          children: [
            {
              index: true,
              element: <Blog />,
              loader: fetchApi, 
            },
            {
              path: ":id",
              element: <SingleBlog />
            }
          ]
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
