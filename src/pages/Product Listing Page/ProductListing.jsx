import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../../backend/db/products.js";
import { CartContext } from "../../contexts/CartContext.js";
import { WishlistContext } from "../../contexts/WishlistContext.js";
import { useCategoryContext } from "../../contexts/CategoryContext.js";
import {
  sortProducts,
  filterProductsByRating,
  applyCategoryFilter,
} from "../..//utils/productUtils.js";
import Sidebar from "../../components/Sidebar";

import "./ProductListing.css";

const ProductListing = () => {
  const { handleAddToCart } = useContext(CartContext);
  const { handleAddToWishlist } = useContext(WishlistContext);
  const { selectedCategory } = useCategoryContext();
  const [techProducts, setTechProducts] = useState([]);
  const [value, setValue] = useState(0);
  const [sortingOrder, setSortingOrder] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const sortProductsHandler = (order) => {
    setSortingOrder(order);
    const sortedProducts = sortProducts(techProducts, order);
    setTechProducts(sortedProducts);
  };

  const handleInput = (e) => {
    setValue(e.target.value);
    const filteredProducts = filterProductsByRating(products, e.target.value);
    setTechProducts(filteredProducts);
  };

  const handleCategoryChange = (categoryName) => {
    const updatedSelectedCategories = selectedCategories.includes(categoryName)
      ? selectedCategories.filter((category) => category !== categoryName)
      : [...selectedCategories, categoryName];

    setSelectedCategories(updatedSelectedCategories);
  };

  useEffect(() => {
    const filteredProducts = applyCategoryFilter(products, selectedCategories);
    setTechProducts(filteredProducts);
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

  return (
    <div>
      <Sidebar
        value={value}
        sortingOrder={sortingOrder}
        selectedCategories={selectedCategories}
        handleInput={handleInput}
        sortProductsHandler={sortProductsHandler}
        handleCategoryChange={handleCategoryChange}
      />

      <h1>This is the Product Listing Page</h1>
      <div className="product-listing">
        {techProducts.map((product) => {
          const handleCart = () => {
            handleAddToCart(product);
          };
          const handleWishlist = () => {
            handleAddToWishlist(product);
          };
          return (
            <div key={product._id} className="product-card">
             
              <img src={product.image} alt={product.name} className='product-img'/>
              <h4>{product.name}</h4>
              <button onClick={handleCart}>Add to Cart</button>
              <button onClick={handleWishlist}>Add to Wishlist</button>
              <Link to={`/product/${product._id}`}>Visit Item</Link>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
