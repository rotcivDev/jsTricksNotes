//iterating over an object
var username = {
  first: 'John',
  last: 'Doe',
  age: 80,
  adress: {
    street: 'Deathroad Street',
    city: 'Doomsday'
  }
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

const obj = {};
Object.assign(obj, entriesIterate);
console.log(obj);
