import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { CartContext } from "../../contexts/CartContext";
const ProductDetail = () => {
  const { productId } = useParams();
  const { techProducts } = useContext(ProductContext);
  const { handleAddToCart } = useContext(CartContext);
  console.log(productId);
  const selectedProduct = techProducts.find(({_id}) => _id === productId);
  console.log(selectedProduct);

  const handleCartClick = () => {
    handleAddToCart(selectedProduct);
  }
  return (
    <div>
      <h1>This is the Product Detail Page</h1>
      <h2>Details</h2>
      <h3>{selectedProduct.name}</h3>
      <p>{selectedProduct.description}</p>
      <p>{selectedProduct.price}</p>
      <p>{selectedProduct.brand}</p>
      <p>{selectedProduct.category}</p>
      <button onClick={handleCartClick}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;

