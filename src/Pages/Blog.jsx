import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Blog = () => {
  const  posts  = useLoaderData(); 
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const LastPost = currentPage * postsPerPage;
  const FirstPost = LastPost - postsPerPage;
  const currentPosts = posts.slice(FirstPost, LastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <div className="space-y-4">
        {currentPosts.map((post) => (
          <div key={post.id} className="p-4 border rounded shadow">
            <Link to={`/blogs/${post.id}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.body.substring(0, 100)}...</p>
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-cyan-500 text-white' : 'bg-white text-cyan-500'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
