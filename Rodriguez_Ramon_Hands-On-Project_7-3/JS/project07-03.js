"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Rodriguez Ramon, october 8, 2023, IST239-W01, Hands-on Project 7-3
*/

setInterval(countdown, 1000);

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");


  function countdown()
{
      let now = new Date(); //date object

      currentTime.textContent = now.toLocaleString(); // get the date to string

      let newYear = new Date("january 1, 2024"); // assing a date
      
      let nextYear = now.getFullYear() + 1; // current year + 1 year

      newYear.setFullYear(nextYear);

      let notequaltime = newYear.getTime() - now.getTime();

      let daysLeft = Math.floor(notequaltime / (1000*60*60*24));

      let hrsLeft = Math.floor(notequaltime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);

      let minsLeft = Math.floor(notequaltime % (1000 * 60 * 60)) / (1000 * 60);

      let secLeft = Math.floor(notequaltime % (1000 * 60) / 1000);

      daysLeftBox.textContent = Math.floor(daysLeft);

      hrsLeftBox.textContent = Math.floor(hrsLeft);

      minsLeftBox.textContent = Math.floor(minsLeft);

      secsLeftBox.textContent = Math.floor(secLeft);

}

