// Capitalize every word in string

// 'hello world' -> 'Hello World'

var capitalizeWords = str => str.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');

var result = capitalizeWords('hello world');
console.log(result);
