"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
    Rodriguez Ramon, october 29, 2023, IST239-W01, Hands-on Project 10-3
*/


function showMap() {
   
   // Page objects
   let bikeMap = document.getElementById("bikeMap");
   let bikeDirections = document.getElementById("bikeDirections");
   let startingPoint = document.getElementById("startingPoint");
   let endingPoint = document.getElementById("endingPoint");   


} 

let bikeFind = new google.maps.DirectionsService();

let bikeDraw = new google.maps.DirectionsRenderer();

let Boulder = {lat: 40.01753, lng:-105.26496};

let specs = {
    zoom:12,
    center: Boulder
};

let myMap = new google.maps.Map(bikeMap, specs);

startingPoint.addEventListener("change", drawRoute);
endingPoint.addEventListener("change", drawRoute);

function drawRoute()
{
    if(startingPoint.selectedIndex !== 0 && endingPoint.selectedIndex !== 0)
    {
        let bikeRoute = {
            origin: startingPoint.value,
            destination: endingPoint.value,
            travelMode: "BICYCLING"
        };

        bikeFind.route(bikeRoute, function(response, status){
            if(status === google.maps.DirectionsStatus.OK){
                bikeDraw.setDirections(response);
    
                bikeDraw.setMap(myMap);
    
                bikeDraw.setPanel(bikeDirections);
    
            }else{
                bikeDirections.textContent = "Directions Unavailable: " + status;
            }
        });
    }
    }

   