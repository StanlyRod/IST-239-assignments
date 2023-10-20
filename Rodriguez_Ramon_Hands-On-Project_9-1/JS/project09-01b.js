"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      
      Rodriguez Ramon, october 19, 2023, IST239-W01, Hands-on Project 9-1
*/

let message = {}; //empty associative array

let querystring = location.search.slice(1); //get the query string

let restring = querystring.replace(/\+/g, " "); //replace + with empty space

let decodestring = decodeURIComponent(restring); //decode the character uri

let cardFields = decodestring.split("&"); //split the string at each & character into an array

for(let value of cardFields)
{
    
      let nameValue = value.split("="); //split the string at each = character

      for(let i = 0; i < nameValue.length; i+=2)
      {

        for(let b = 1; b < nameValue.length; b +=2)
        {
            message[nameValue[i]] = nameValue[b] //add the keys and the values to the empty associative array
        }
        
      }
    
}

let to = document.getElementById("to");
let from = document.getElementById("from");
let mainmessage = document.getElementById("msg");

to.textContent = message["to"];
from.textContent = message["from"];
mainmessage.textContent = message["msg"];