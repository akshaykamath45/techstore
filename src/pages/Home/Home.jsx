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
        // Use Link directly as the clickable element
        <Link key={category._id} to="/products" onClick={() => handleCategoryClick(category.categoryName)}>
          <div>
            <h2>{category.categoryName}</h2>
            {/* You can add more content here for each category */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
