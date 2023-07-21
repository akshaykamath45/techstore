import React from "react";
import { categories } from "../../backend/db/categories.js";
import { useNavigate } from "react-router-dom";
import { useCategoryContext } from "../../contexts/CategoryContext";
import "./Home.css";

const Home = () => {
  const { setSelectedCategory } = useCategoryContext();

  const navigate = useNavigate();
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    navigate("/products");
  };
  const exploreProducts = () => {
    navigate("/products");
  };

  return (
    <div>
      <div className="hero-section">
        <h1 className="landing-title">Welcome to Tech Store</h1>
        <h2 className="caption">
          One stop solution for all your tech needs !!!
        </h2>
        <img
          src="https://i.postimg.cc/V6z0tKgJ/lannding-page-img.jpg"
          alt="landing-page"
          className="landing-img"
        />
        <button onClick={exploreProducts} className="explore-products">
          Explore Products
        </button>
      </div>

      <div className="category-section">
        <h1>Search by Categories</h1>
        <div className="category-cards">
          {categories.map((category) => (
            <div
              className="category-card"
              key={category._id}
              onClick={() => handleCategoryClick(category.categoryName)}
            >
              <h2 className="category-name">{category.categoryName}</h2>
              <img
                src={category.image}
                alt="category"
                className="category-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
