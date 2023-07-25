import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../backend/db/products.js";
import { CartContext } from "../../contexts/CartContext.js";
import { WishlistContext } from "../../contexts/WishlistContext.js";
import { useCategoryContext } from "../../contexts/CategoryContext.js";
import { ProductContext } from "../../contexts/ProductContext.js";
import { toast } from "react-toastify";
import emptyProducts from "../../assets/emptyProducts.svg";
import {
  sortProducts,
  filterProductsByRating,
  applyCategoryFilter,
} from "../..//utils/productUtils.js";
import Sidebar from "../../components/Sidebar";
import "./ProductListing.css";

const ProductListing = () => {
  const { handleAddToCart, cart } = useContext(CartContext); // Get the cart from the context
  const { handleAddToWishlist, wishlist, handleDeleteFromWishlist } =
    useContext(WishlistContext);
  const { selectedCategory } = useCategoryContext();
  const { techProducts, setTechProducts, resetFilters } =
    useContext(ProductContext);
  const [value, setValue] = useState(5);
  const [sortingOrder, setSortingOrder] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

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

  const handleResetFilters = () => {
    resetFilters();
    setValue(5);
    setSortingOrder(null);
    setSelectedCategories([]);
  };

  useEffect(() => {
    const filteredProducts = applyCategoryFilter(products, selectedCategories);
    setTechProducts(filteredProducts);
  }, [selectedCategories, setTechProducts]);

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

  useEffect(() => {
    const filteredProducts = applyCategoryFilter(products, selectedCategories);
    const updatedTechProducts = filteredProducts.map((product) => ({
      ...product,
      cartValue: !!cart.find((item) => item._id === product._id),
      wishlistValue: !!wishlist.find((item) => item._id === product._id),
    }));
    setTechProducts(updatedTechProducts);
  }, [selectedCategories, cart, wishlist, setTechProducts]);

  const handleCardClick = (product) => {
    navigate(`/product/${product._id}`);
  };

  const handleCart = (event, product) => {
    event.stopPropagation();
    const existingItem = cart.find((item) => item._id === product._id);
    if (existingItem) {
    } else {
      handleAddToCart(product);
      toast.success("Added to Cart", { autoClose: 500 });
    }
    const updatedTechProducts = techProducts.map((item) => {
      if (item._id === product._id) {
        return { ...item, cartValue: true };
      }
      return item;
    });
    setTechProducts(updatedTechProducts);
    if (product.cartValue === true) {
      navigate("/cart");
    }
  };

  const handleWishlist = (event, product) => {
    event.stopPropagation();
    const existingItem = wishlist.find((item) => item._id === product._id);
    if (existingItem) {
      handleDeleteFromWishlist(event, product._id);
      toast.success("Removed from Wishlist", { autoClose: 500 });
    } else {
      handleAddToWishlist(product);
      toast.success("Added to Wishlist", { autoClose: 500 });
    }
    const updatedTechProducts = techProducts.map((item) => {
      if (item._id === product._id) {
        return { ...item, wishlistValue: !existingItem };
      }
      return item;
    });

    setTechProducts(updatedTechProducts);
  };

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

      <button onClick={handleResetFilters} className="reset-btn">
        Reset Filters
      </button>
      <div classname="product-listing-container"></div>
      <h3 className="showing-items">
        Showing {techProducts.length} out of {products.length} items
      </h3>
      <div className="product-listing">
        {techProducts.map((product) => (
          <div
            key={product._id}
            className="product-card"
            onClick={() => handleCardClick(product)}
          >
            <div className="product-image-items">
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
              <p className="product-ratings">
                {product.rating}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                  className="star-icon"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </p>
            </div>

            <h4 className="product-name">{product.name}</h4>
            <p className="discounted-price">
              ₹ {product.discountedPrice}{" "}
              <span className="product-price">₹{product.price}</span>
            </p>
            <button
              onClick={(event) => handleCart(event, product)}
              className="cart-btn"
              style={{
                backgroundColor: product.cartValue ? "rgb(255, 98, 20)" : "",
                color: product.cartValue ? "black" : "",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-cart-plus-fill cart-icon"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
              </svg>
              {product.cartValue === true ? "Go to Cart" : "Add to Cart"}
            </button>
            <button
              onClick={(event) => handleWishlist(event, product)}
              className="wishlist-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart-fill"
                className="heart-icon"
                viewBox="0 0 16 16"
                style={{ color: product.wishlistValue ? "red" : "" }}
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </button>
          </div>
        ))}
        {techProducts.length === 0 && (
          <div className="empty-products">
            <h1>No products to show</h1>
            <img
              src={emptyProducts}
              alt="empty-product"
              className="empty-product-image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
