import React from "react";
import { useContext } from "react";
import {Link} from "react-router-dom"
import { products } from "../../backend/db/products.js";
import { CartContext } from "../../contexts/CartContext.js";
import { WishlistContext } from "../../contexts/WishlistContext.js";
const ProductListing = () => {
  console.log(products);
  const { handleAddToCart } = useContext(CartContext);
  const { handleAddToWishlist } = useContext(WishlistContext);
  return (
    <div>
      <h1>This is the Product Listing Page</h1>
      {products.map((product) => {
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
            <button onClick={handleCart}>Add to Cart</button>
            <button onClick={handleWishlist}> Add to Wishlist</button>
            <Link to={`/product/${product._id}`}>Visit Item</Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ProductListing;
