"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Rodriguez Ramon, november 10, 2023, IST239-W01, Hands-on Project 12-3
      
*/


$(() => {
      // click() method 
      $('article > h2').click(function(e) {
         
         let heading = $(e.target);

         let list = heading.next();

         let headingImage = heading.children("img");

         list.slideToggle(500);

         //if the image is a plus then change the image to minus
      if(headingImage.attr('src') === 'plus.png') 
      {
            headingImage.attr('src', 'minus.png');
      } else 
      {
            headingImage.attr('src', 'plus.png');
      }
      });
  });