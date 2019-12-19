// Iterate over a string

var str = 'hello world';
/*
for (let i = 0; i <str.length; i++) {
  console.log(str.charAt(i), i);
}

for (let s in str) {
  console.log(str.charAt(s), s);
}

for (let s in str) {
  console.log(str[s], s);
}
*/

var newString = str.split('');
console.log(newString);
for (let [i, n] of newString.entries()) {
  console.log(n, i);
}
