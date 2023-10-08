"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      
      Rodriguez Ramon, october 7, 2023, IST239-W01, Hands-on Project 7-1

*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

   e.preventDefault(); //prevent form from submiting

   let regex1 = /[A-Z]/; //regular expression that checks for uppercase letters

   let regex2 = /[0-9]/; //regular expression that checks for a number from 0 to 9

   let regex3 = /[!$#%]/; //regular expression that checks for present symbols

   if(pwd.length < 8)
   {
      feedback.textContent = "Your password must be at least 8 characters.";
   }
   else if(!regex1.test(pwd))
   {
      feedback.textContent = "Your password must include an uppercase letter";
   }
   else if(!regex2.test(pwd))
   {
      feedback.textContent = "Your password must include a number";
   }
   else if(!regex3.test(pwd))
   {
      feedback.textContent = "Your password must include one of the following !$#%";
   }
   else
   {
      signupForm.submit(); //submit the form if the validation is approved
   }

}
);