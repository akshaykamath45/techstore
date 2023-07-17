import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../../backend/db/products.js";
import { CartContext } from "../../contexts/CartContext.js";
import { WishlistContext } from "../../contexts/WishlistContext.js";
import { useCategoryContext } from "../../contexts/CategoryContext.js";
import "./ProductListing.css";

const ProductListing = () => {
  const { handleAddToCart } = useContext(CartContext);
  const { handleAddToWishlist } = useContext(WishlistContext);
  const { selectedCategory } = useCategoryContext();
  const [techProducts, setTechProducts] = useState([]);
  const [value, setValue] = useState(0);
  const [sortingOrder, setSortingOrder] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const sortProducts = (order) => {
    setSortingOrder(order);
    if (order === "highToLow") {
      const sortedProducts = [...techProducts].sort(
        (a, b) => b.price - a.price
      );
      setTechProducts(sortedProducts);
    } else if (order === "lowToHigh") {
      const sortedProducts1 = [...techProducts].sort(
        (a, b) => a.price - b.price
      );
      setTechProducts(sortedProducts1);
    }
  };
  const handleInput = (e) => {
    setValue(e.target.value);
    const selectedPrice = parseInt(e.target.value, 10);
    const filteredProducts = products.filter(
      (product) => product.price <= selectedPrice
    );
    setTechProducts(filteredProducts);
  };
  const handleCategoryChange = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== categoryName)
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  useEffect(() => {
    applyCategoryFilter(products);
  }, [selectedCategories]);

  useEffect(() => {
    if (selectedCategory) {
      setSelectedCategories((prevSelectedCategories) =>
        prevSelectedCategories.includes(selectedCategory)
          ? prevSelectedCategories.filter(
              (category) => category !== selectedCategory
            )
          : [...prevSelectedCategories, selectedCategory]
      );
    }
  }, [selectedCategory]);

  const applyCategoryFilter = (productsArray) => {
    if (selectedCategories.length === 0) {
      setTechProducts(productsArray);
    } else {
      const filteredProducts = productsArray.filter((product) =>
        selectedCategories.includes(product.category)
      );
      setTechProducts(filteredProducts);
    }
  };

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
          onChange={() => sortProducts("highToLow")}
        />
        High to Low
      </label>
      <label>
        <input
          type="radio"
          name="sorting"
          value="lowToHigh"
          checked={sortingOrder === "lowToHigh"}
          onChange={() => sortProducts("lowToHigh")}
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

      <h1>This is the Product Listing Page</h1>
      {techProducts.map((product) => {
        const handleCart = () => {
          handleAddToCart(product);
        };
        const handleWishlist = () => {
          handleAddToWishlist(product);
        };
        return (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={handleCart}>Add to Cart</button>
            <button onClick={handleWishlist}>Add to Wishlist</button>
            <Link to={`/product/${product._id}`}>Visit Item</Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ProductListing;
