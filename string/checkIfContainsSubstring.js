// Check if string contains substring

const URL = 'https://api.github.com/users/rotcivdev';

// poor example...
const containsWord = URL.includes('github');
console.log(`The URL ${URL}  contains 'github'? ${containsWord}`);


const containsWordIndex = URL.indexOf('github');
console.log(`The URL ${URL} have the word 'github'starting in what index? i= ${containsWordIndex}`);

// also have the startsWith() and endsWith() methods
