"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      
      Rodriguez Ramon, september 16, 2023, IST239-W01, Hands-on Project 5-1
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");



// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions

let timeID;

const questionList = document.querySelectorAll('div#quiz input');

startQuiz.onclick = function()
{
   overlay.className = "showquiz";
   timeID = setInterval(countdown, 1000);
}

function countdown()
{
   if(timeLeft == 0)
   {
      clearInterval(timeID);
      let totalCorrect = checkAnswers();

      if(totalCorrect == correctAnswers.length)
      {
         alert("Congrats in getting 100%");
      }
      else
      {
         let incorrect = 5 - totalCorrect;
         alert("incorrect answers " + incorrect);
         timeLeft = quizTime;
         quizClock.value = timeLeft;
         overlay.className = "hidequiz";
      }
   }
   else
   {
      timeLeft = timeLeft - 1;
      quizClock.value = timeLeft;
   }
}






















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

