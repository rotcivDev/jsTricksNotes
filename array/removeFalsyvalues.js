// remove falsy values in array 
// js falsy values = '', 0, null, undefined, NaN

var temps = [40, 38, undefined, 27, '', 0, null, NaN];

var newTemps = temps.filter(temps => temps);

console.log(newTemps);