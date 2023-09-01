// Please don't change the pre-written code
// Import the necessary modules here


import { addToCart } from "../model/cart.model.js";

export const addToCartController = (req, res) => {
  // Write your code here
  const {userId,productId,quantity} = req.body;
  const data = {userId,productId,quantity};
  addToCart(data);
  
};

export const removeFromCartController = (req, res) => {
  // Write your code here
};
