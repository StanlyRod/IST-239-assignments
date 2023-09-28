"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Rodriguez Ramon, september 27, 2023, IST239-W01, Hands-on Project 6-1

      Filename: project06-01.js
*/

let submitButton = document.getElementById("submitButton");

let pwd = document.getElementById("pwd");

let pwd2 = document.getElementById("pwd2");

//perform data validation when the save button is clicked
submitButton.addEventListener('click', function(){
      if(pwd.validity.patternMismatch)
      {
            pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
      }
      else if(pwd.value != pwd2.value)
      {
            pwd.setCustomValidity("Your password must match");
      }
      else
      {
            pwd.setCustomValidity("");
      }
      
} );