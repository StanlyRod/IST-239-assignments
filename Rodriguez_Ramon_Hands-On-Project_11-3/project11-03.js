"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-03

      Project to retrieve order history from a web server
      
      Rodriguez Ramon, november 5, 2023, IST239-W01, Hands-on Project 11-3
*/

let orderResult = document.getElementById("orderResult");
let userIDBox = document.getElementById("userID");
let pwdBox = document.getElementById("pwd");


// Retrieve order history when the View Orders button is clicked
viewOrders.onclick = function() {
   let user = userIDBox.value;
   let pwd = pwdBox.value;

   let url = `https://wworders.pl?id=${user}&pwd=${pwd}`;
   fetch(url)
   .then(response => {
      if(!response.ok)
      {
            throw new Error("problem with the response");
      }

      return response.json();
   })
   .then(data => {
      buildOrderTable(data);
   })
   .catch(error => {
      console.log("error", error);
   });
}


// Function to display order history within web tables
function buildOrderTable(obj) 
{
      if(obj.status === "Orders Not Found")
      {
            orderResult.innerHTML = "No orders found for this used id and password";
      }
      else
      {
            let htmlCode = `<table id="summary"><tr><th>Name</th><td>${obj.username}</td><tr><th>Total Charges</th><td>${obj.totalCharges}</td></tr></table>`;

            for(let i = 0; i < obj.orderHistory; i++)
            {
                  htmlCode = `<table class="orderList"><tr><th colspan="2">${obj.orderHistory.orderDate}</th><th colspan="2">${obj.orderHistory.cost}</th></tr><tr><th>Description</th><th>Qty</th><th>Price</th><th>Total</th></tr>`;

                  for(let a = 0; a < obj.orderHistory.products; a++)
                  {
                        htmlCode = `<tr><td>${obj.orderHistory.products.description}</td><td>${obj.orderHistory.products.qty}</td><td>${obj.orderHistory.products.price}</td><td>${obj.orderHistory.products.total}</td></tr>`;
                  }

                  htmlCode = "</table>";
            }

            orderResult.innerHTML = htmlCode.value;
           
      }
}

