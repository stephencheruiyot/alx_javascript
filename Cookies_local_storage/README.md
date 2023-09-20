 # Shopping Cart Example

This is a simple shopping cart example that demonstrates how to use HTML, JavaScript, and Web storage to create a basic e-commerce website.

### Step 1: HTML

The HTML code creates the basic structure of the web page and includes the necessary elements for the shopping cart.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart</title>
</head>
<body>
    <script>
        // Check if session storage is available
        if (typeof(Storage) === "undefined") {
            alert("Sorry, your browser does not support Web storage. Try again with a better one.");
        } else {
            // Array of available items
            const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

            // Function to parse cart from session storage
            function getCartFromStorage() {
                const cartString = sessionStorage.getItem("cart");
                return cartString ? JSON.parse(cartString) : {};
            }

            // Function to add an item to the cart
            function addItemToCart(item) {
                const cart = getCartFromStorage();
                cart[item] = (cart[item] || 0) + 1;
                sessionStorage.setItem("cart", JSON.stringify(cart));
                displayCart();
            }

            // Function to remove an item from the cart
            function removeItemFromCart(item) {
                const cart = getCartFromStorage();
                delete cart[item];
                sessionStorage.setItem("cart", JSON.stringify(cart));
                displayCart();
            }

            // Function to clear the entire cart
            function clearCart() {
                sessionStorage.removeItem("cart");
                displayCart();
            }

            // Function to create the store
            function createStore() {
                const h2 = document.createElement("h2");
                h2.textContent = "Available products:"
                document.body.appendChild(h2);

                const ul = document.createElement("ul");

                // Loop through available items and create list items
                availableItems.forEach(item => {
                    const

