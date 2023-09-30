"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

     Rodriguez Ramon, september 30, 2023, IST239-W01, Hands-on Project 6-3
*/

let useShip = document.getElementById('useShip');

//run the copyshippingtobilling function on click
useShip.addEventListener('click', copyShippingToBilling);

function copyShippingToBilling()
{
      let firstnameShip = document.getElementById('firstnameShip');
      let lastnameShip = document.getElementById('lastnameShip');
      let address1Ship = document.getElementById('address1Ship');
      let address2Ship = document.getElementById('address2Ship');
      let cityShip = document.getElementById('cityShip');
      let countryShip = document.getElementById('countryShip');
      let codeShip = document.getElementById('codeShip');
      let stateShip = document.getElementById('stateShip');

      let firstnameBill = document.getElementById('firstnameBill');
      let lastnameBill = document.getElementById('lastnameBill');
      let address1Bill = document.getElementById('address1Bill');
      let address2Bill = document.getElementById('address2Bill');
      let cityBill = document.getElementById('cityBill');
      let countryBill = document.getElementById('countryBill');
      let codeBill = document.getElementById('codeBill');
      let stateBill = document.getElementById('stateBill');

      //if the checkbox is checked then copy the values of the Shipping elements to the bulling elements
      if(useShip.checked)
      {
            firstnameBill.value = firstnameShip.value;
            lastnameBill.value = lastnameShip.value;
            address1Bill.value = address1Ship.value;
            address2Bill.value = address2Ship.value;
            cityBill.value = cityShip.value;
            countryBill.value = countryShip.value;
            codeBill.value = codeShip.value; 
            stateBill.selectedIndex = stateShip.selectedIndex;
      }
}

//select all the type text elements inside the form
let formElements = document.querySelectorAll("input[type='text']");

let fieldCount = formElements.length;

let errorBox = document.getElementById('errorBox');

//run the showValidationError function on every element with invalid validation
for(let i = 0; i < fieldCount; i++)
{
      formElements[i].addEventListener('invalid', showValidationError);
}

function showValidationError(evt)
{
      evt.preventDefault();
      errorBox.textContent = "Complete all highlighted fields";
}