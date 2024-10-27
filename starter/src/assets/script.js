/* create array named products */
const products =[];

const Strawberry = {
  name: "strawberry",
  price: 69,
  quantity:0,
  productId:1,
  image:"./images/strawberry.jpg"
 };
 const Cherry = {
  name: "cherry",
  price: 40,
  quantity:0,
  productId:2,
  image:"./images/cherry.jpg"
 };
 const Orange = {
  name:"orange",
  price:50,
  quantity:0,
  productId:3,
  image:"./images/orange.jpg"
 };
/* Declare an empty array named cart to hold the items in the cart */
products.push(Strawberry,Cherry,Orange);
let cart=[];
/* Helper function to find product by productId */
function findProductById(productId) {
  return products.find(product => product.productId === productId);
}
/* Finds product from productId then adds to cart/increase quantity in cart*/
function addProductToCart(productId){
  const product =findProductById(productId);
  if (!product){
    return;
  }
  product.quantity++;
  const cartItem = cart.find(item => item.productId === productId);
  if (!cartItem){
    cart.push(product);
  } 
  };
/* Finds product by iD and increases quantity */
function increaseQuantity(productId){
  const product =findProductById(productId);
  if (!product){
    return;
  }
  product.quantity++;
  console.log("quantity increased by 1");
}
/* Decreases quantity of products, removing from cart if 0*/
function decreaseQuantity(productId) {
  const product = products.find((p) => p.productId === productId);

  if (product) {
    if (product.quantity === 1) {
      removeProductFromCart(productId);
    } else {
      product.quantity -= 1;
    }
  }
}
/* Removes product from cart*/ 
function removeProductFromCart(productId){
  const product =findProductById(productId);
  if (product){
    product.quantity=0;
  cart = cart.filter(item => item.productId !== productId);
  console.log(product.name + 'was removed from the cart');
 } 
 }

/* sums the price of products in the cart*/
function cartTotal() {
  let total = 0;
  for (const product of cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return total;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart = [];
}
/* Calculates change to be received as change, or funds owed */
let totalPaid = 0;
function pay(amount) {
  let amountOwed = cartTotal() - totalPaid;
  if (amountOwed <= 0) {
    return amount;
  }
  totalPaid += amount;
  return amount - amountOwed;
}

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
