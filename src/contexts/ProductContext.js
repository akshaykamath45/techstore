import React, { createContext, useState } from "react";
import { products } from "../backend/db/products.js";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [techProducts, setTechProducts] = useState(products);

  const resetFilters = () => {
    setTechProducts(products);
  };

  return (
    <ProductContext.Provider
      value={{ techProducts, setTechProducts, resetFilters }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
