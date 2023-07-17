import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Apple iPhone 14 Pro Max",
    description:
      "6.7-inch Super Retina XDR display with ProMotion. Ceramic Shield front cover. A15 Bionic chip. 5G capable. Pro camera system.",
    price: 1099,
    category: "Smartphones",
    brand: "Apple",
    image: "https://i.postimg.cc/fTMy77Xg/iphone-14-pro-max.jpg",
  },
  {
    _id: uuid(),
    name: "Samsung Galaxy S22 Ultra",
    description:
      "6.8-inch Dynamic AMOLED 2X display. Gorilla Glass Victus front and back. Exynos 2100 or Snapdragon 888 chipset. 5G capable. Quad camera system.",
    price: 1199,
    category: "Smartphones",
    brand: "Samsung",
    image: "https://i.postimg.cc/9fQyx57K/s22-ultra.jpg",
  },
  {
    _id: uuid(),
    name: "Google Pixel 6 Pro",
    description:
      "6.7-inch QHD+ LTPO OLED display. Gorilla Glass Victus front. Google Tensor chip. 5G capable. Dual camera system.",
    price: 899,
    category: "Smartphones",
    brand: "Google",
    image: "https://i.postimg.cc/MTxv0x3g/pixel-6-pro.jpg",
  },

  // Laptops
  {
    _id: uuid(),
    name: "Apple MacBook Air",
    description:
      "13.3-inch Retina display with True Tone. M1 chip. 8-core CPU. 7-core GPU. Up to 18 hours of battery life.",
    price: 999,
    category: "Laptops",
    brand: "Apple",
    image: "https://i.postimg.cc/PqVY93bx/macbook-air.jpg",
  },
  {
    _id: uuid(),
    name: "Dell XPS 13",
    description:
      "13.4-inch Full HD+ InfinityEdge display. 11th Gen Intel Core i7. Intel Iris Xe Graphics. Up to 32GB RAM. ",
    price: 1199,
    category: "Laptops",
    brand: "Dell",
    image: "https://i.postimg.cc/bvVqgzW1/dell-xps-13.jpg",
  },
  {
    _id: uuid(),
    name: "HP Spectre x360",
    description:
      "13.3-inch Full HD IPS display. 11th Gen Intel Core i7. Intel Iris Xe Graphics. Convertible 2-in-1 design.",
    price: 1099,
    category: "Laptops",
    brand: "HP",
    image: "https://i.postimg.cc/7L93dRmv/hp-spectre-x360.jpg",
  },
];
