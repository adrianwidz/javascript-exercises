const convertToCelsius = function(degrees) {
  const celcius = (degrees - 32) * (5/9); 
  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function(degrees) {
  const fahrenheir =  degrees * (9/5) + 32;
  return Math.round(fahrenheir * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
