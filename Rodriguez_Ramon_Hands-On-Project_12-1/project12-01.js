"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      
      Rodriguez Ramon, november 10, 2023, IST239-W01, Hands-on Project 12-1
*/



$(() => {
      $('li.submenu').mouseover(function(e) {
            //show dropdown menu
            $(e.currentTarget).children("ul").show();
      }).mouseout(function(e) {
            //hide dropdown menu
            $(e.currentTarget).children("ul").hide();
      });
});


                                                