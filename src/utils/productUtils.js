export const sortProducts = (products, order) => {
  if (order === "highToLow") {
    return [...products].sort((a, b) => b.price - a.price);
  } else if (order === "lowToHigh") {
    return [...products].sort((a, b) => a.price - b.price);
  } else {
    return products;
  }
};

export const filterProductsByRating = (products, selectRating) => {
  const selectedRating = parseInt(selectRating, 10);
  return products.filter((product) => product.rating <= selectedRating);
};

export const applyCategoryFilter = (products, selectedCategories) => {
  if (selectedCategories.length === 0) {
    return products;
  } else {
    return products.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }
};
