// Please don't change the pre-written code
// Import the necessary modules here



const cart =[];
let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

export const addToCart = (userId, productId, quantity) => {
  // Write your code here

  const addCart = new cartModel(userId,productId,quantity);
  cart.push(addCart);
  return addCart;
};

export const removeFromCart = (userId, cartItemId) => {
  // Write your code here
  

};
