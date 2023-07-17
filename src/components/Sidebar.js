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
        max="5"
        step="0.1"
        value={value}
        onChange={handleInput}
      />
      <div className="slider-labels">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
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