/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to you
function addToCart(button) {
  var product = button.parentNode;
  var rating = product.querySelector("p").textContent;
  
  // Disable the button
  button.disabled = true;
  
  // Add the item to the cart
  var cartItem = document.createElement("div");
  cartItem.className = "cart-item";
  cartItem.textContent = product.querySelector("h3").textContent + " (" + rating + ")";
  document.getElementById("cart-items").appendChild(cartItem);
}

function removeItemFromCart(cartItem) {
  // Enable the "Add to Cart" button
  var button = cartItem.querySelector(".add-to-cart");
  button.disabled = false;
  
  // Remove the item from the cart
  cartItem.parentNode.removeChild(cartItem);
}