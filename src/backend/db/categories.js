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
  },
  {
    _id: uuid(),
    categoryName: "Laptops",
    description: "Portable computing devices designed for mobile use.",
  },
  
];

// {
//   _id: uuid(),
//   categoryName: "Tablets",
//   description: "Compact, handheld computing devices with touchscreens.",
// },
// {
//   _id: uuid(),
//   categoryName: "Accessories",
//   description: "Various gadgets and add-ons to complement tech devices.",
// },