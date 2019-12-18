// Get last item in array, get everything before last item in array

var names = ['Bill', 'Fred', 'Doug', 'Jessica', 'John', 'Angie'];
var lastName = names[names.length -1];
console.log(`Names array = ${names} || last name of the array = ${lastName}`);

var beforeLastName = names.slice(0, -1);
console.log(`Names before last = ${beforeLastName}`);
