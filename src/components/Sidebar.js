import React from "react";

const Sidebar = ({
  value,
  sortingOrder,
  selectedCategories,
  handleInput,
  sortProductsHandler,
  handleCategoryChange,
}) => {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="2000"
        step="500"
        value={value}
        onChange={handleInput}
      />
      <div className="slider-labels">
        <span>0</span>
        <span>500</span>
        <span>1000</span>
        <span>1500</span>
        <span>2000</span>
      </div>

      <label>
        <input
          type="radio"
          name="sorting"
          value="highToLow"
          checked={sortingOrder === "highToLow"}
          onChange={() => sortProductsHandler("highToLow")}
        />
        High to Low
      </label>
      <label>
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
      </div>
    </div>
  );
};

export default Sidebar;
