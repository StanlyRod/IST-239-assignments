/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Rodriguez Ramon, August 27, 2023, IST239-W01, Hands-on Project 2-1
 */

//converting and returning fahrenheit to celsius      
function FahrenheitToCelsius(degree)
{
      return (degree - 32) / 1.8;
}

//converting and returning celsius to fahrenheit
function CelsiusToFahrenheit(degree)
{
       return (degree * 1.8) + 32
}

let anom = function()
{
      let cDegree = document.getElementById('cValue').value;

      document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
}

let anom2 = function()
{
      let fDegree = document.getElementById("fValue").value;

      document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
}