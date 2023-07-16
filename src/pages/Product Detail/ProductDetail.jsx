import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../backend/db/products";
const ProductDetail = () => {
  const { productId } = useParams();
  console.log(productId);
  const selectedProduct = products.find(({ _id }) => _id === productId);
  console.log(selectedProduct);
  return (
    <div>
      <h1>This is the Product Detail Page</h1>
      <h2>Details</h2>
      <h3>{selectedProduct.name}</h3>
      <p>{selectedProduct.description}</p>
      <p>{selectedProduct.price}</p>
      <p>{selectedProduct.brand}</p>
      <p>{selectedProduct.category}</p>
    </div>
  );
};

export default ProductDetail;
