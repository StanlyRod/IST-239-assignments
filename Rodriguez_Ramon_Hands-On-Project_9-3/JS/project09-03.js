"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      
      Rodriguez Ramon, october 20, 2023, IST239-W01, Hands-on Project 9-3
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime"); //get an array of elements with a class named posttime


if(localStorage.sbloggerVisit)
{
      let storedLastDate = localStorage.getItem('sbloggerVisit');
      lastVisitDate.textContent = storedLastDate;

      let lastDate = new Date(storedLastDate);

      for(let value of articleDates)
      {
            let articleDate = new Date(value.textContent);

            if(articleDate > lastDate)
            {
                  value.innerHTML += "<strong>new</strong>";
            }
      }
}
else
{
      lastVisitDate.textContent = "Welcome to SBlogger";

      for(let each of articleDates)
      {
            each.innerHTML += "<strong>new</strong>";
      }
}

let currentDate = new Date("9/12/2024").toLocaleDateString();


localStorage.setItem("sbloggerVisit", currentDate);

