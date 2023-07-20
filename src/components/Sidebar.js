import React from "react";
import "./Sidebar.css";
const Sidebar = ({
  value,
  sortingOrder,
  selectedCategories,
  handleInput,
  sortProductsHandler,
  handleCategoryChange,
}) => {
  return (
    <div className="sidebar">
      <h1 className="title">Filter Products</h1>
      <p className='ratings'>Filter by Ratings</p>
      <input
        type="range"
        min="1"
        max="5"
        step="0.1"
        value={value}
        onChange={handleInput}
        className='filter-ratings'
      />

      <div className="slider-labels">

        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>

      <label>
        <p className='sort-by-price'>Sort by Price</p>
        <input
          type="radio"
          name="sorting"
          value="highToLow"
          checked={sortingOrder === "highToLow"}
          onChange={() => sortProductsHandler("highToLow")}
        />
        High to Low
      </label>
      <label className="sort">
        <input
          type="radio"
          name="sorting"
          value="lowToHigh"
          checked={sortingOrder === "lowToHigh"}
          onChange={() => sortProductsHandler("lowToHigh")}
        />
        Low to High
      </label>

      <div>
        <label>
          <p className='filter-by-category'>Filter by Category</p>
          <input
            type="checkbox"
            onChange={() => handleCategoryChange("Smartphones")}
            checked={selectedCategories.includes("Smartphones")}
          />
          Smartphones
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCategoryChange("Laptops")}
            checked={selectedCategories.includes("Laptops")}
          />
          Laptops
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCategoryChange("Tablets")}
            checked={selectedCategories.includes("Tablets")}
          />
          Tablets
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCategoryChange("Accessories")}
            checked={selectedCategories.includes("Accessories")}
          />
          Accesories
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
