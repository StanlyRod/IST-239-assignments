"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-05

      Project to add orders to shopping cart web storage
      Rodriguez Ramon, october 22, 2023, IST239-W01, Hands-on Project 9-5
*/

// Page Objects
let submitButton = document.getElementById("submitButton");
let product = document.getElementById("product");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let size = document.getElementById("size");
let color = document.getElementById("color");

submitButton.onclick = function() {
   let itemTotal;
   // Increase the total items in the shopping cart by 1
   if (sessionStorage.getItem('itemsInCart')) {
      itemTotal = parseInt(sessionStorage.getItem('itemsInCart')) + 1;
   } else {
      itemTotal = 1;
   }
   
   // Store the number of items in the shopping cart
   sessionStorage.setItem('itemsInCart', itemTotal);
   
   // Create a text string describing the product added to the cart
   let itemText = product.textContent + "&";
   itemText += price.textContent + "&";
   itemText += quantity.textContent + "&";
   itemText += size..textContent + "&";
   itemText += color.textContent;

   // Create a new shopping cart storage item with the key name "cartItem" plus the item number
   sessionStorage.setItem('cartItem', + itemTotal, itemText);
   
}