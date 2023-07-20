import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../backend/db/products.js";
import { CartContext } from "../../contexts/CartContext.js";
import { WishlistContext } from "../../contexts/WishlistContext.js";
import { useCategoryContext } from "../../contexts/CategoryContext.js";
import { ProductContext } from "../../contexts/ProductContext.js";
import { toast } from "react-toastify";
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
  const { techProducts, setTechProducts, resetFilters } = useContext(ProductContext);
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
       
        <button onClick={handleResetFilters} className='reset-btn'>Reset Filters</button>

      <div className="product-listing">
        {techProducts.map((product) => {
          const handleCardClick = () => {
            navigate(`/product/${product._id}`);
          };

          const handleCart = (event) => {
            event.stopPropagation();
            handleAddToCart(product);
            // getUpdatedCart();
          };
          // const getUpdatedCart=async()=>{
          //   try{

          //     if(product.cartValue===true){
          //       navigate("/cart");
          //     } else{

          //     toast.success("Added to cart", { autoClose: 500 });
          //     }
          //     console.log(product.cartValue)
          //   }catch(e){
          //     console.log(e)
          //   }
          // }

          const handleWishlist = (event) => {
            event.stopPropagation();
            handleAddToWishlist(product);
            toast.success("Added to wishlist", { autoClose: 500 });
          };

          return (
            <div
              key={product._id}
              className="product-card"
              onClick={handleCardClick}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
              <h4 className="product-name">{product.name}</h4>
              <button onClick={handleCart} className="cart-btn">
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
              <button onClick={handleWishlist} className="wishlist-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="18"
                  fill="currentColor"
                  className="bi bi-heart heart-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
