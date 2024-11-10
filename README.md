Shopping Cart System
This is a basic shopping cart system built in JavaScript, designed to add, update, and remove items from a cart while calculating the total cost.

Array Structure
products: An array holding available products, each with properties like name, price, quantity, productId, and image.
cart: An initially empty array that stores items added to the cart.
Functions
findProductById(productId): Searches the products array to return a product object by its productId.

addProductToCart(productId): Adds a product to the cart array or increments its quantity if already in the cart.

increaseQuantity(productId): Increases the quantity of a product in products by 1.

decreaseQuantity(productId): Decreases the quantity of a product by 1, removing it from the cart if quantity reaches zero.

removeProductFromCart(productId): Sets the product’s quantity to zero and removes it from the cart array.

cartTotal(): Returns the total cost of all items in the cart.

emptyCart(): Empties all products from the cart.

pay(amount): Accepts a payment amount, calculates the change or amount owed, and updates the total paid.

Usage
Use this module to simulate adding, removing, and managing products in a simple shopping cart. Ideal for testing and development in e-commerce applications.
