import React from "react";
import { useContext } from "react";
import { products } from "../../backend/db/products.js";
import { CartContext } from "../../contexts/CartContext.js";
const ProductListing = () => {
  console.log(products);
  const { handleAddToCart } = useContext(CartContext);
  return (
    <div>
      <h1>This is the Product Listing Page</h1>
      {products.map((product) => {
        const handleCart = () => {
          handleAddToCart(product);
        };
        return (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button onClick={handleCart}>Add to Cart</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ProductListing;
