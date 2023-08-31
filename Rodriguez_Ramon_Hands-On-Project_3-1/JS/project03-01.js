/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Rodriguez Ramon, August 31, 2023, IST239-W01, Hands-on Project 3-1
*/


//adding a a click event listener to each element with the class name menuItem that call the calcTotal function
let menuItems = document.getElementsByClassName('menuItem');
for(let i = 0; i < menuItems.length; i++)
{
      menuItems[i].addEventListener("click", calcTotal);
}


//this function performs addition on each check box value then return total value
function calcTotal()
{
      let orderTotal = 0;
      for(let i =0; i< menuItems.length; i++)
      {
            if(menuItems[i].checked)
            {
                  orderTotal = orderTotal + Number(menuItems[i].value);
            }
      }

      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }