"use strict"

/*

Ramon Stanly Rodriguez
IST-239 Final Project
11/28/23

*/


//this function change the folder color to orange
function ChangeFolderOrangeColor(value)
{
    let foldersIcon = document.querySelectorAll("span");
    foldersIcon[value].style.color = "rgb(223, 139, 43)";
}

//this function change the folder color to green
function ChangeFolderGreenColor(value)
{
    let foldersIcon = document.querySelectorAll("span");
    foldersIcon[value].style.color = "rgb(43, 223, 157)";
}



let paragraphFolders = document.querySelectorAll('p.folders');

for(let i = 0; i < paragraphFolders.length; i++)
{
    //call the change orange color when the mouse over a folder
    paragraphFolders[i].addEventListener("mouseover", function(){
        ChangeFolderGreenColor(i);
    });

    //call the change green color when the leave a folder
    paragraphFolders[i].addEventListener("mouseout", function(){
        ChangeFolderOrangeColor(i);
    });
}





const projectsInfo = {

    folder1: 
    {
    title1: "Hands on project 1-1 - Introduction to JavaScript",
    content1: "The first project was all about getting familiar with the basic of javascript and learning how to use the document.write function.",
    url1: "https://Hands-On-Project_1-1",
    url1ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_1-1/project01-01.html",
    
    title2: "Hands on project 1-3  -  Introduction to basic event handler",
    content2: "The hands on project 1-3 I learned how to write text to a specific element using a simple onclick event handler and the document object model.",
    url2: "https://Hands-On-Project_1-3",
    url2ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_1-3/project01-03.html",

    title3: "Hands on project 1-5  -  Introduction to debugging",
    content3: "In the Hands on project 1-5 I was introduced to basic debugging examining the javascript code to locate and fix errors.",
    url3: "https://Hands-On-Project_1-5",
    url3ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_1-5/project01-05.html"
    },


    folder2:
    {
        title1: "Hands on project 2-1 - Functions and Data Types",
        content1: "The chapter 2 guide me to the principles of using data types, creating, calling functions and event listeners and the hands on project 2-1 I learned how to use the onchange event and how to create \
        functions to convert and return fahrenheit to celsius and celsius to fahrenheit.",
        url1: "https://Hands-On-Project_2-1",
        url1ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_2-1/project02-01.html",

        title2: "Hands on project 2-3 - Functions and Data Types",
        content2: "The task for the hands on project 2-3 was learning how to use the onmouseover and onmouseout events handlers to make a paragraph change its text every time the mouse over a different shape",
        url2: "https://Hands-On-Project_2-3",
        url2ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_2-3/project02-03.html",

        title3: "Hands on project 2-5 Browser Debugging tools",
        content3: "The main assignment of the project 2-5 was use the browser debugging tools to catch and display errors in the browser console log",
        url3: "https://Hands-On-Project_2-5",
        url3ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_2-5/project02-05.html"
    },

    folder3:
    {
        title1: "Hands on project 3-1 - Introduction to for loop",
        content1: "One of the main points of the project 3-1 was to learn how to use a for loop with conditional statement and use a for loop to iterate through the values of different check boxes \
        and perform addition and return a total value.",
        url1: "https://Hands-On-Project_3-1",
        url1ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_3-1/project03-01.html",

        title2: "Hands on project 3-3 - Using for loop and arrays",
        content2: "In the project 3-3 I have to write a javascript code to generate and populate an html table with the top 10 movies from the IMDB website using for loops and arrays.",
        url2: "https://Hands-On-Project_3-3",
        url2ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_3-3/project03-03.html",

        title3: "Hands on project 3-5 - Debugging",
        content3: "For the project 3-5 I have to use the browser console to fix a bar chart error describing the relative sales of five brands of cell phones sold by a company",
        url3: "https://Hands-On-Project_3-5",
        url3ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_3-5/project03-05.html"
    },

    folder4:
    {
        title1: "Hands on project 4-1 Debugging Challenge",
        content1: "The task for the project 4-1 was learning how to use a try catch block in JavaScript to fix some logic errors in a moving company website.",
        url1: "https://Hands-On-Project_4-1",
        url1ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_4-1/project04-01.html",

        title2: "Hands on project 4-3 - Characters Counter",
        content2: "In the project 4-3  I have to debug an application that counts the number of characters in a comment to ensure it does not exceed a predetermined limit. The app uses the \
        keyup event to trigger a function named countCharacters() that counts the characters in the review text box.",
        url2: "https://Hands-On-Project_4-3",
        url2ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_4-3/project04-03.html",

        title3: "Hands on project 4-5 Debugging Challenge",
        content3: "For the project 4-5 I have to fix a program that converts angular measurements between degrees and radians. The program uses the formula to convert an angle measured \
         in degrees to radians and vice versa and I had to use the debugging tool of the web browser to fix the errors",
        url3: "https://Hands-On-Project_4-5",
        url3ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_4-5/project04-05.html"
    },

    folder5:
    {
        title1: "Hands on project 5-1 Introduction to the DOM",
        content1: "The project 5-1 guided me to built an online algebra practice quiz website with a timer, scoring, and instant feedback for students. \
        In this project I learn how to use the set interval function to call the countdown function every second and how to use the queryselectorall function to use a set of html elements.",
        url1: "https://Hands-On-Project_5-1",
        url1ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_5-1/project05-01.html",

        title2: "Hands on project 5-3 Nodes Properties",
        content2: "The 5-3 project focuses on exploring node properties and uses, and it covers nodeName property to get tag names and demonstrates \
        a for loop iterating through child elements without a counter variable and one thing that I learned  in this project was how to create elements using the createelements function and how to populate a table using a for loop.",
        url2: "https://Hands-On-Project_5-3",
        url2ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_5-3/project05-03.html",

        title3: "Hands on project 5-5 - Debugging Challenge",
        content3: " In this project I have debugging challenge related to an online Concentration game. The challenge involves fixing errors in the code that affects tile flipping and matching functionality. Players flip image tiles and need to fix issues preventing proper game behavior.",
        url3: "https://Hands-On-Project_5-5",
        url3ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_5-5/project05-05.html"

    },

    folder6:
    {
        title1: "Hands on project 6-1 - Introduction to Web Forms",
        content1: "For the project 6-1 I learn how to validate a form when the text field password is too short and when there is a mismatch in the password text inputs. \
        The main task of this project was to create a user sign-up form with password validation, ensuring it's at least 8 characters and contains a letter and a number. Password confirmation is required, flagging discrepancies in the passwords.",
        url1: "https://Hands-On-Project_6-1",
        url1ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_6-1/project06-01.html",

        title2: "Hands on project 6-3 - Custom Web Form validation",
        content2: "This project involves creating a second form for validation reasons to collect billing and shipping information. It includes a checkbox to copy shipping details to billing form, \
        displays custom error messages in a box, and disable the browser default validation error bubbles.",
        url2: "https://Hands-On-Project_6-3",
        url2ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_6-3/project06-03.html",

        title3: "Hands on project 6-5 - Debugging Challenge",
        content3: "The main task of this project is to use the browser debugging tools to fix some JavaScript errors in a conference registration form that calculates the total cost for attendees.",
        url3: "https://Hands-On-Project_6-5",
        url3ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_6-5/project06-05.html"
    },


    folder7:
    {
        title1: "Hands on project 7-1 - Regular Expressions",
        content1: "The 7-1 project guided me to use regular expressions to validate passwords in a web form, ensuring they meet specific criteria (length, uppercase, digit, symbol). If validation failures trigger informative messages in the form.",
        url1: "https://Hands-On-Project_7-1",
        url1ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_7-1/project07-01.html",

        title2: "Hands on project 7-3 - Date Objects",
        content2: "For the 7-3 project I have to use Date object properties and methods  to create a countdown clock to the new year, updating every second. \
        The Math.floor() is used for integer display. The clock handles fractional parts of days, hours, minutes, and seconds remaining in the year.",
        url2: "https://Hands-On-Project_7-3",
        url2ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_7-3/project07-03.html",

        title3: "Hands on project 7-5 - Debugging Challenge",
        content3: "This project uses a JavaScript code to compare authors based on word length frequencies, exemplified with excerpts from Ernest Hemingway and H.P. Lovecraft.",
        url3: "https://Hands-On-Project_7-5",
        url3ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_7-5/project07-05.html"
    },

    folder8:
    {
        title1: "Hands on project 8-1 - Object Class",
        content1: "In this project I had to create a countdown timer object class with properties for minutes, seconds, and interval. \
        The class includes a method to run or pause the timer,and updating every second.",
        url1: "https://Hands-On-Project_8-1",
        url1ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_8-1/project08-01.html",

        title2: "Hands on project 8-3 - Object Literal",
        content2: "The main task in this project was to create a pizza and shopping cart objects to manage pizza details and customer orders. and the web interface should enable pizza customization.",
        url2: "https://Hands-On-Project_8-3",
        url2ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_8-3/project08-03.html",

        title3: "Hands on project 8-5 - Debugging Challenge",
        content3: "In this debugging challenge I have to check the code of a web based chess game and use the browser debugging tool to fix any error in the game.",
        url3: "https://Hands-On-Project_8-5",
        url3ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_8-5/project08-05.html"
    },

    folder9:
    {
        title1: "Hands on project 9-1 - Query String",
        content1: "In this project I learned how to create a web page where customers add greeting messages to purchased gifts. The messages are entered on one form and displayed in a shopping cart on a separate page using query string data transfer.",
        url1: "https://Hands-On-Project_9-1",
        url1ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_9-1/project09-01a.html",

        title2: "Hands on project 9-3 - Local Storage",
        content2: "The task for this project was to implements web storage for a blogging site, marking new articles based on the user's last visit date. \
        The last visit date is stored using local storage with the key 'sbloggerVisit' and newly posted articles are labeled 'New'.",
        url2: "https://Hands-On-Project_9-3",
        url2ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_9-3/project09-03.html",

        title3: "Hands on project 9-5 Debugging Challenge",
        content3: "This project is about a debugging challenge for a winter clothing website. It involves fixing code to add selected glove products to a shopping cart using session storage.",
        url3: "https://Hands-On-Project_9-5",
        url3ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_9-5/product01.html"
    },

    folder10:
    {
        title1: "Hands on project 10-1 - Event Objects",
        content1: "In this project I learned how to enhance a jigsaw puzzle page with drag-and-drop features using pointer events with 48 randomly placed pieces,\
         the code mirrors that of the Oak Top House room layout for drag-and-drop functionality.",
        url1: "https://Hands-On-Project_10-1",
        url1ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_10-1/project10-01.html",

        title2: "Hands on project 10-3 - Third Party APIs",
        content2: "For the 10-3 project I had to create an interactive map for a Boulder cycling club, enabling users to get directions between two cycling destination in a map using the google map API directions services.",
        url2: "https://Hands-On-Project_10-3",
        url2ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_10-3/project10-3.html",

        title3: "Hands on project 10-5 - Debugging CrossWord Puzzle",
        content3: "In the 10-5 project I had to debug a crossword puzzle web app by examining the code and using the web browser debugging tools, I have Correct keyboard actions for typing answers, moving spaces, deleting letters, and toggling typing direction.",
        url3: "https://Hands-On-Project_10-5",
        url3ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_10-5/project10-5.html"
    },


    folder11:
    {
        title1: "Hands on project 11-1 - Nasa API",
        content1: "In this project I learn how to do an http get request to the NASA API to show the astronomy picture of the day. I used Fetch to retrieve the Astronomy Picture of the Day (APOD) from NASA's API.\
         Utilize the endpoint with the date parameter and a free API key, 'DEMO_KEY,' limited to 30 requests per hour. And retrieve JSON data with details like title, explanation, URL, and media type. ",
        url1: "https://Hands-On-Project_11-1",
        url1ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_11-1/project11-01.html",

        title2: "Hands on project 11-3 - XAMPP",
        content2: "The main task in this project was to complete an app retrieving Wizard Works' fireworks orders via wworders.pl script. \
        Send user credentials for JSON response with customer name, order status, total charges, and order details. Handle order history, including dates, costs, and purchased items. Access a comprehensive view of customer orders and costs.",
        url2: "https://Hands-On-Project_11-3",
        url2ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_11-3/project11-03.html",

        title3: "Hands on project 11-5 Debugging Challenge",
        content3: "In this project I had to enhance a science fiction author's book review site by fixing file access errors. Using requests and responses to access archived reviews, popular authors' JSON list, and recent SF podcasts from server files.",
        url3: "https://Hands-On-Project_11-5",
        url3ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_11-5/project11-05.html"


    },

    folder12:
    {
        title1: "Hands on project 12-1 - Introduction to JQUERY",
        content1: "For the 12-1 project I had to complete the Wildlife Sea Cruises website using jQuery. And finalize the project by implementing a dropdown menu with links to other pages on the site.",
        url1: "https://Hands-On-Project_12-1",
        url1ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_12-1/project12-01.html",

        title2: "Hands on project 12-3 - JQUERY Animation",
        content2: "In this project I had to Enhance the Save your Fork dessert website using jQuery visual effects on a recipe page, by implementing a toggle feature, allowing users to reveal and hide ingredients and directions by clicking the respective headings.",
        url2: "https://Hands-On-Project_12-3",
        url2ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_12-3/project12-03.html",

        title3: "Hands on project 12-5 - Debugging Challenge",
        content3: "The task for this debugging challenge was to fix jQuery validation errors in a web form for user data entry and I had to ensure proper functioning of username, email, and password validation for successful form submission.",
        url3: "https://Hands-On-Project_12-5",
        url3ref: "https://www.ist239-rodriquez.beausanders.net/Hands-On-Project_12-5/project12-05.html"
    },

    
};



function CreateOverLay(title1, content1, url1, url1ref, title2, content2, url2, url2ref, title3, content3, url3, url3ref)
{
    let overlay = document.createElement("div");
    overlay.id = "coverlay";
    overlay.display = "block";

    let middlebox = document.createElement("section");
    middlebox.id = "middlebox";


    let closeButton = document.createElement("div");
    closeButton.id = "closeB";


    let closeIcon = document.createElement("span");
    closeIcon.id = "iconImage";
    closeIcon.className = "fa-solid fa-circle-xmark";


    //first project elements
    let title = document.createElement("h3");
    title.id = "overlayTi";
    title.textContent = title1;

    let content = document.createElement("p");
    content.id = "overlayPa";
    content.textContent = content1;

    let url = document.createElement("a");
    url.id = "overlayUr";
    url.textContent = url1;
    url.target = "_blank";
    url.href = url1ref;



    //second project elements
    let titlesecond = document.createElement("h3");
    titlesecond.id = "overlayTi2";
    titlesecond.textContent = title2;

    let contentsecond = document.createElement("p");
    contentsecond.id = "overlayPa2";
    contentsecond.textContent = content2;

    let urlsecond = document.createElement("a");
    urlsecond.id = "overlayUr2";
    urlsecond.textContent = url2;
    urlsecond.target = "_blank";
    urlsecond.href = url2ref;



    //third project elements
    let titlethird = document.createElement("h3");
    titlethird.id = "overlayTi3";
    titlethird.textContent = title3;

    let contentthird = document.createElement("p");
    contentthird.id = "overlayPa3";
    contentthird.textContent = content3;

    let urlthird = document.createElement("a");
    urlthird.id = "overlayUr3";
    urlthird.textContent = url3;
    urlthird.target = "_blank";
    urlthird.href = url3ref;


    closeButton.appendChild(closeIcon);

    middlebox.appendChild(closeButton);
    middlebox.appendChild(title);
    middlebox.appendChild(content);
    middlebox.appendChild(url);

    middlebox.appendChild(titlesecond);
    middlebox.appendChild(contentsecond);
    middlebox.appendChild(urlsecond);

    middlebox.appendChild(titlethird);
    middlebox.appendChild(contentthird);
    middlebox.appendChild(urlthird);

    overlay.appendChild(middlebox);

    //remove the overlay when clicked
    closeIcon.addEventListener("pointerdown", function() {
    
        document.body.removeChild(overlay);

    });

    document.body.appendChild(overlay);

}


const folder1 = projectsInfo.folder1;
const folder2 = projectsInfo.folder2;
const folder3 = projectsInfo.folder3;
const folder4 = projectsInfo.folder4;
const folder5 = projectsInfo.folder5;
const folder6 = projectsInfo.folder6;
const folder7 = projectsInfo.folder7;
const folder8 = projectsInfo.folder8;
const folder9 = projectsInfo.folder9;
const folder10 = projectsInfo.folder10;
const folder11 = projectsInfo.folder11;
const folder12 = projectsInfo.folder12;



//folder1
let onFolder1 = document.getElementById("folder1");

onFolder1.addEventListener("pointerdown", function() {
    CreateOverLay(folder1.title1, folder1.content1, folder1.url1, folder1.url1ref, folder1.title2, folder1.content2, folder1.url2, folder1.url2ref, folder1.title3, folder1.content3, folder1.url3, folder1.url3ref);
});


//folder2
let onFolder2 = document.getElementById("folder2");

onFolder2.addEventListener("pointerdown", function(){
    CreateOverLay(folder2.title1, folder2.content1, folder2.url1, folder2.url1ref, folder2.title2, folder2.content2, folder2.url2, folder2.url2ref, folder2.title3, folder2.content3, folder2.url3, folder2.url3ref);
});


//folder3
let onFolder3 = document.getElementById("folder3");

onFolder3.addEventListener("pointerdown", function(){
    CreateOverLay(folder3.title1, folder3.content1, folder3.url1, folder3.url1ref, folder3.title2, folder3.content2, folder3.url2, folder3.url2ref, folder3.title3, folder3.content3, folder3.url3, folder3.url3ref);
});


//folder4
let onFolder4 = document.getElementById("folder4");

onFolder4.addEventListener("pointerdown", function(){
    CreateOverLay(folder4.title1, folder4.content1, folder4.url1, folder4.url1ref, folder4.title2, folder4.content2, folder4.url2, folder4.url2ref, folder4.title3, folder4.content3, folder4.url3, folder4.url3ref);
});


//folder5
let onFolder5 = document.getElementById("folder5");

onFolder5.addEventListener("pointerdown", function(){
    CreateOverLay(folder5.title1, folder5.content1, folder5.url1, folder5.url1ref, folder5.title2, folder5.content2, folder5.url2, folder5.url2ref, folder5.title3, folder5.content3, folder5.url3, folder5.url3ref);
});


//folder6
let onFolder6 = document.getElementById("folder6");

onFolder6.addEventListener("pointerdown", function(){
    CreateOverLay(folder6.title1, folder6.content1, folder6.url1, folder6.url1ref, folder6.title2, folder6.content2, folder6.url2, folder6.url2ref, folder6.title3, folder6.content3, folder6.url3, folder6.url3ref);
});


//folder7
let onFolder7 = document.getElementById("folder7");

onFolder7.addEventListener("pointerdown", function(){
    CreateOverLay(folder7.title1, folder7.content1, folder7.url1, folder7.url1ref, folder7.title2, folder7.content2, folder7.url2, folder7.url2ref, folder7.title3, folder7.content3, folder7.url3, folder7.url3ref);
});


//folder8
let onFolder8 = document.getElementById("folder8");

onFolder8.addEventListener("pointerdown", function(){
    CreateOverLay(folder8.title1, folder8.content1, folder8.url1, folder8.url1ref, folder8.title2, folder8.content2, folder8.url2, folder8.url2ref, folder8.title3, folder8.content3, folder8.url3, folder8.url3ref);
});


//folder9
let onFolder9 = document.getElementById("folder9");

onFolder9.addEventListener("pointerdown", function(){
    CreateOverLay(folder9.title1, folder9.content1, folder9.url1, folder9.url1ref, folder9.title2, folder9.content2, folder9.url2, folder9.url2ref, folder9.title3, folder9.content3, folder9.url3, folder9.url3ref);
});


//folder10
let onFolder10 = document.getElementById("folder10");

onFolder10.addEventListener("pointerdown", function(){
    CreateOverLay(folder10.title1, folder10.content1, folder10.url1, folder10.url1ref, folder10.title2, folder10.content2, folder10.url2, folder10.url2ref, folder10.title3, folder10.content3, folder10.url3, folder10.url3ref);
});


//folder11
let onFolder11 = document.getElementById("folder11");

onFolder11.addEventListener("pointerdown", function(){
    CreateOverLay(folder11.title1, folder11.content1, folder11.url1, folder11.url1ref, folder11.title2, folder11.content2, folder11.url2, folder11.url2ref, folder11.title3, folder11.content3, folder11.url3, folder11.url3ref);
});


//folder12
let onFolder12 = document.getElementById("folder12");

onFolder12.addEventListener("pointerdown", function(){
    CreateOverLay(folder12.title1, folder12.content1, folder12.url1, folder12.url1ref, folder12.title2, folder12.content2, folder12.url2, folder12.url2ref, folder12.title3, folder12.content3, folder12.url3, folder12.url3ref);
});





