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
      "6.7-inch Super Retina XDR display with ProMotion. Ceramic Shield front cover. A15 Bionic chip. 5G capable. Pro camera system. ",
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
    name: "Apple MacBook Air",
    description:
      "13.3-inch Retina display with True Tone. M1 chip. 8-core CPU. 7-core GPU. Up to 18 hours of battery life. ",
    price: 999,
    category: "Laptops",
    brand: "Apple",
    image: "https://i.postimg.cc/PqVY93bx/macbook-air.jpg",
  },
];
