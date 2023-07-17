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
    rating: 4.8,
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
    rating: 4.7,
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
    rating: 3.5,
  },
  {
    _id: uuid(),
    name: "Apple MacBook Air",
    description:
      "13.3-inch Retina display with True Tone. M1 chip. 8-core CPU. 7-core GPU. Up to 18 hours of battery life.",
    price: 999,
    category: "Laptops",
    brand: "Apple",
    image: "https://i.postimg.cc/PqVY93bx/macbook-air.jpg",
    rating: 4.6,
  },
  {
    _id: uuid(),
    name: "Dell XPS 13",
    description:
      "13.4-inch Full HD+ InfinityEdge display. 11th Gen Intel Core i7. Intel Iris Xe Graphics. Up to 32GB RAM.",
    price: 1199,
    category: "Laptops",
    brand: "Dell",
    image: "https://i.postimg.cc/bvVqgzW1/dell-xps-13.jpg",
    rating: 2.7,
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
    rating: 3.6,
  },
  {
    _id: uuid(),
    name: "Samsung Galaxy Tab S7",
    description:
      "11-inch LTPS TFT display. Snapdragon 865+ chipset. 5G capable. Dual camera system. S Pen included.",
    price: 699,
    category: "Tablets",
    brand: "Samsung",
    image: "https://i.postimg.cc/mZjgG61C/samsung-galaxy-tab-s7.jpg",
    rating: 2.4,
  },
  {
    _id: uuid(),
    name: "Microsoft Surface Pro 8",
    description:
      "13-inch PixelSense display. 11th Gen Intel Core i5 or i7. Intel Iris Xe Graphics. Surface Pen compatible.",
    price: 1299,
    category: "Tablets",
    brand: "Microsoft",
    image: "https://i.postimg.cc/sxwLspwn/microsoft-surface-pro-8.jpg",
    rating: 3.6,
  },
  {
    _id: uuid(),
    name: "Amazon Kindle Paperwhite",
    description:
      "6-inch glare-free display. Waterproof. Built-in adjustable light. 8GB storage.",
    price: 129,
    category: "Tablets",
    brand: "Amazon",
    image: "https://i.postimg.cc/0y1BFR7L/kindle-paperwhite.jpg",
    rating: 2.5,
  },
  {
    _id: uuid(),
    name: "Logitech MX Master 3",
    description:
      "Advanced ergonomic design. Ultra-fast and precise scrolling. Customizable buttons.",
    price: 99,
    category: "Accessories",
    brand: "Logitech",
    image: "https://i.postimg.cc/0yxH2FDK/logitech-mx-master-3.jpg",
    rating: 4.8,
  },
  {
    _id: uuid(),
    name: "Sony WH-1000XM4",
    description:
      "Industry-leading noise-canceling. High-resolution audio. Long-lasting battery.",
    price: 349,
    category: "Accessories",
    brand: "Sony",
    image: "https://i.postimg.cc/c4PtqR69/sony-wh-1000xm4.jpg",
    rating: 3.7,
  },
  {
    _id: uuid(),
    name: "OnePlus 9 Pro",
    description:
      "6.7-inch Fluid AMOLED display. Snapdragon 888 chipset. Hasselblad quad camera system.",
    price: 899,
    category: "Smartphones",
    brand: "OnePlus",
    image: "https://i.postimg.cc/q76Y7NQX/oneplus-9-pro.jpg",
    rating: 3.8,
  },
  {
    _id: uuid(),
    name: "Lenovo ThinkPad X1 Carbon",
    description:
      "14-inch WQHD display. 11th Gen Intel Core i7. Intel Iris Xe Graphics. Durable and lightweight.",
    price: 1599,
    category: "Laptops",
    brand: "Lenovo",
    image: "https://i.postimg.cc/xdT6dyYC/lenovo-thinkpad-x1-carbon.jpg",
    rating: 1.9,
  },
  {
    _id: uuid(),
    name: "iPad Pro 12.9-inch",
    description:
      "Liquid Retina XDR display. Apple M1 chip. 5G capable. Face ID.",
    price: 1099,
    category: "Tablets",
    brand: "Apple",
    image: "https://i.postimg.cc/zDhSDSNp/ipad-pro-12.9.jpg",
    rating: 4.8,
  },
  {
    _id: uuid(),
    name: "Razer Blade 15",
    description:
      "15.6-inch Full HD display. 10th Gen Intel Core i7. NVIDIA GeForce RTX 3070. RGB Chroma keyboard.",
    price: 1999,
    category: "Laptops",
    brand: "Razer",
    image: "https://i.postimg.cc/9fWxj6Cw/razer-blade-15.jpg",
    rating: 1.7,
  },
  {
    _id: uuid(),
    name: "Anker PowerCore 26800",
    description:
      "High-capacity power bank. Dual micro-USB inputs. PowerIQ and VoltageBoost technology.",
    price: 59,
    category: "Accessories",
    brand: "Anker",
    image: "https://i.postimg.cc/QMFVq2px/anker-powercore-26800.jpg",
    rating: 2.5,
  },
  {
    _id: uuid(),
    name: "Google Pixel 5a",
    description:
      "6.4-inch OLED display. Snapdragon 765G chipset. 5G capable. Dual camera system.",
    price: 499,
    category: "Smartphones",
    brand: "Google",
    image: "https://i.postimg.cc/ZnqTnXk2/pixel-5a.jpg",
    rating: 4.6,
  },
  {
    _id: uuid(),
    name: "Asus ROG Zephyrus G14",
    description:
      "14-inch QHD display. AMD Ryzen 9 5900HS. NVIDIA GeForce RTX 3060. AniMe Matrix LED display on the lid.",
    price: 1699,
    category: "Laptops",
    brand: "Asus",
    image: "https://i.postimg.cc/cHx2w46J/asus-rog-zephyrus-g14.jpg",
    rating: 3.8,
  },
  {
    _id: uuid(),
    name: "Samsung Galaxy Tab A7",
    description:
      "10.4-inch TFT display. Snapdragon 662 chipset. Large battery capacity.",
    price: 229,
    category: "Tablets",
    brand: "Samsung",
    image: "https://i.postimg.cc/vBYQ0smF/samsung-galaxy-tab-a7.jpg",
    rating: 2.6,
  },
  {
    _id: uuid(),
    name: "Apple AirPods Pro",
    description:
      "Active Noise Cancellation. Adaptive EQ. Sweat and water-resistant.",
    price: 249,
    category: "Accessories",
    brand: "Apple",
    image: "https://i.postimg.cc/J4zn8yy2/airpods-pro.jpg",
    rating: 4.9,
  },
  {
    _id: uuid(),
    name: "Sony Xperia 1 III",
    description:
      "6.5-inch 4K OLED display. Snapdragon 888 chipset. Triple camera system with ZEISS optics.",
    price: 1199,
    category: "Smartphones",
    brand: "Sony",
    image: "https://i.postimg.cc/3Jc4zj1d/sony-xperia-1-iii.jpg",
    rating: 2.7,
  },
  {
    _id: uuid(),
    name: "Logitech G Pro Wireless",
    description:
      "Ultra-lightweight design. HERO 25K sensor. Long-lasting battery life.",
    price: 129,
    category: "Accessories",
    brand: "Logitech",
    image: "https://i.postimg.cc/dt0SC1gQ/logitech-g-pro-wireless.jpg",
    rating: 3.8,
  },
  {
    _id: uuid(),
    name: "Lenovo Yoga 9i",
    description:
      "14-inch 4K IPS display. 11th Gen Intel Core i7. Intel Iris Xe Graphics. Rotating Sound Bar with Dolby Atmos.",
    price: 1599,
    category: "Laptops",
    brand: "Lenovo",
    image: "https://i.postimg.cc/nVP3p7Gn/lenovo-yoga-9i.jpg",
    rating: 2.6,
  },
  {
    _id: uuid(),
    name: "Amazon Echo (4th Gen)",
    description:
      "Premium sound. Built-in smart home hub. Alexa voice assistant.",
    price: 99,
    category: "Accessories",
    brand: "Amazon",
    image: "https://i.postimg.cc/13x2rmD1/amazon-echo-4th-gen.jpg",
    rating: 4.5,
  },
  {
    _id: uuid(),
    name: "Samsung Galaxy S23",
    description:
      "6.6-inch Super AMOLED display. Exynos 2200 or Snapdragon 895 chipset. 5G capable. Triple camera system.",
    price: 1099,
    category: "Smartphones",
    brand: "Samsung",
    image: "https://i.postimg.cc/tTh3xtCk/samsung-galaxy-s23.jpg",
    rating: 4.7,
  },
  {
    _id: uuid(),
    name: "Microsoft Surface Go 3",
    description:
      "10.5-inch PixelSense display. Intel Pentium Gold or Core i3. Lightweight and portable.",
    price: 399,
    category: "Tablets",
    brand: "Microsoft",
    image: "https://i.postimg.cc/zvJ6TT7j/microsoft-surface-go-3.jpg",
    rating: 3.6,
  },
  {
    _id: uuid(),
    name: "Acer Predator Helios 300",
    description:
      "15.6-inch Full HD IPS display. 10th Gen Intel Core i7. NVIDIA GeForce RTX 3060. High-performance gaming laptop.",
    price: 1299,
    category: "Laptops",
    brand: "Acer",
    image: "https://i.postimg.cc/y83v37d0/acer-predator-helios-300.jpg",
    rating: 2.7,
  },
];
  // Add more tablets, accessories, smartphones, and laptops with ratings here...
  // Remember to update the "uuid()" with appropriate unique identifiers for each item.

