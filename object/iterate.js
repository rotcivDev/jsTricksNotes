//iterating over an object

var username = {
  first: 'John',
  last: 'Doe',
};

for (let u in username) {
  if (username.hasOwnProperty(u)) {
    console.log(u, username[u])
  }
}

for (let u of Object.keys(username)) {
  console.log(u, username[u])
}

const entriesIterate = Object.entries(username);
console.log(entriesIterate);

entriesIterate.forEach(([key, value]) => {
  console.log(key, value);
  });


let newUsername = entriesIterate.reduce((o, key) => ({
  ...o, key, [key[0]]: o[1],
})); 
  

console.log(newUsername);
