// Find shared values between two arrays

var men = ['Jim', 'Doug', 'Richard', 'Fred'];

var over50 = ['Angie', 'Dave', 'Jessica', 'Jim', 'Richard'];

var shared = men.filter(man=> over50.includes(man));
console.log(`Men array = ${men} || over50 array = ${over50} || shared values = ${shared}`);

/*
Another option
var shared2 = over50.filter(person => men.includes(person));
console.log(shared2)
*/
