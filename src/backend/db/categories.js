import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Smartphones",
    description:
      "Mobile devices that provide advanced computing and communication capabilities.",
    image:"https://i.postimg.cc/sDndSmPv/smartphones.png"
  },
  {
    _id: uuid(),
    categoryName: "Laptops",
    description: "Portable computing devices designed for mobile use.",
    image:"https://i.postimg.cc/Y2zw2MhN/laptops.png"
  },
  {
    _id: uuid(),
    categoryName: "Tablets",
    description: "Compact, handheld computing devices with touchscreens.",
    image:"https://i.postimg.cc/KjfX0rdp/tablets.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    description: "Various gadgets and add-ons to complement tech devices.",
    image:"https://i.postimg.cc/XYzWMLXT/accessories.jpg"
  },
  
];



