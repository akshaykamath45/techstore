// Home.jsx
import React from 'react';
import { categories } from '../../backend/db/categories.js';
import { Link } from 'react-router-dom';
import { useCategoryContext } from '../../contexts/CategoryContext';

const Home = () => {
  const { setSelectedCategory } = useCategoryContext();

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div>
      <h1>This is the Home Page</h1>
      {categories.map((category) => (
        <Link to="/products">
        <div key={category._id}>
          <h2>{category.categoryName}</h2>
          <button onClick={() => handleCategoryClick(category.categoryName)}>
            View Products
          </button>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
