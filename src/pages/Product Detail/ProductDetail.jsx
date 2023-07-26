import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";
import { toast } from "react-toastify";
import "./ProductDetail.css";
const ProductDetail = () => {
  const { productId } = useParams();
  const { techProducts, setTechProducts } = useContext(ProductContext);
  const { handleAddToCart, cart } = useContext(CartContext);
  const { handleAddToWishlist, wishlist } = useContext(WishlistContext);
  console.log(productId);
  const selectedProduct = techProducts.find(({ _id }) => _id === productId);
  console.log(selectedProduct);
  const navigate = useNavigate();
  const handleCartClick = () => {
    const existingItem = cart.find((item) => item._id === selectedProduct._id);

    if (existingItem) {
    } else {
      handleAddToCart(selectedProduct);
      toast.success("Added to cart", { autoClose: 500 });
    }
    const updatedTechProducts = techProducts.map((item) => {
      if (item._id === selectedProduct._id) {
        return { ...item, cartValue: true };
      }
      return item;
    });
    setTechProducts(updatedTechProducts);
    if (selectedProduct.cartValue === true) {
      navigate("/cart");
    }
  };

  const handleWishlistClick = () => {
    const existingItem = wishlist.find(
      (item) => item._id === selectedProduct._id
    );
    if (existingItem) {
    } else {
      handleAddToWishlist(selectedProduct);
      toast.success("Added to wishlist", { autoClose: 500 });
    }
    const updatedTechProducts = techProducts.map((item) => {
      if (item._id === selectedProduct._id) {
        return { ...item, wishlistValue: !existingItem };
      }
      return item;
    });

    setTechProducts(updatedTechProducts);

    if (selectedProduct.wishlistValue === true) {
      navigate("/wishlist");
    }
  };

  const updateProductState = () => {
    const existingCartItem = cart.find(
      (item) => item._id === selectedProduct._id
    );
    if (existingCartItem) {
      setTechProducts((prevProducts) => {
        return prevProducts.map((item) => {
          if (item._id === selectedProduct._id) {
            return { ...item, cartValue: true };
          }
          return item;
        });
      });
    } else {
      setTechProducts((prevProducts) => {
        return prevProducts.map((item) => {
          if (item._id === selectedProduct._id) {
            return { ...item, cartValue: false };
          }
          return item;
        });
      });
    }
    const existingWishlistItem = wishlist.find(
      (item) => item._id === selectedProduct._id
    );
    if (existingWishlistItem) {
      setTechProducts((prevProducts) => {
        return prevProducts.map((item) => {
          if (item._id === selectedProduct._id) {
            return { ...item, wishlistValue: true };
          }
          return item;
        });
      });
    } else {
      setTechProducts((prevProducts) => {
        return prevProducts.map((item) => {
          if (item._id === selectedProduct._id) {
            return { ...item, wishlistValue: false };
          }
          return item;
        });
      });
    }
  };

  useEffect(() => {
    updateProductState();
  }, [cart, wishlist, selectedProduct, setTechProducts]);
  return (
    <div className="product-details">
      <div className="product-img-div">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="selected-product-img"
        />
      </div>
      <div className="details-section">
        <h3>{selectedProduct.name}</h3>
        <p>
          <b>Description:</b> {selectedProduct.description}
        </p>
        <p>
          <b>Price:</b> ₹ {selectedProduct.price}
        </p>
        <p>
          <b>Brand: </b>
          {selectedProduct.brand}
        </p>
        <p>
          <b>Category:</b> {selectedProduct.category}
        </p>
        <p>
          <b>RAM:</b> {selectedProduct.ram}
        </p>
        <p>
          <b>Storage:</b> {selectedProduct.storage}
        </p>
        <p>
          <b>Rating:</b> {selectedProduct.rating}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
            className="star-icon-product-detail"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </p>
        <div className="btns">
          <button
            onClick={handleCartClick}
            className="product-cart-btn"
            style={{
              backgroundColor: selectedProduct.cartValue
                ? "rgb(255, 98, 20)"
                : "",
              color: selectedProduct.cartValue ? "black" : "",
            }}
          >
            {selectedProduct.cartValue === true ? "Go to Cart" : "Add to Cart"}
          </button>
          <button
            onClick={handleWishlistClick}
            style={{
              backgroundColor: selectedProduct.wishlistValue
                ? "rgb(255, 98, 20)"
                : "",
              color: selectedProduct.wishlistValue ? "black" : "",
            }}
            className="product-wishlist-btn"
          >
            {selectedProduct.wishlistValue === true
              ? "Go to Wishlist"
              : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
