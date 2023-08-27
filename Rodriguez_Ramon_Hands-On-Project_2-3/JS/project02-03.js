/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Rodriguez Ramon, August 27, 2023, IST239-W01, Hands-on Project 2-3
 */

//square  
let sq = document.getElementById("square");
sq.onmouseover = function()
{
      document.getElementById("feedback").innerHTML = "You 're hovering over the square";
}


let sq2 = document.getElementById("square");
sq2.onmouseout = function()
{
      document.getElementById("feedback").innerHTML = "";
}


//triangle 
let tr = document.getElementById("triangle");
tr.onmouseover = function()
{
      document.getElementById("feedback").innerHTML = "You 're hovering over the triangle";
}


let tr2 = document.getElementById("triangle");
tr2.onmouseout = function()
{
      document.getElementById("feedback").innerHTML = "";
}


//circle
let cr = document.getElementById("circle");
cr.onmouseover = function()
{
      document.getElementById("feedback").innerHTML = "You 're hovering over the circle";
}


let cr2 = document.getElementById("circle");
cr.onmouseout = function()
{
      document.getElementById("feedback").innerHTML = "";
}