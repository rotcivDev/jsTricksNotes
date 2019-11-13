// prevent object properties from beingn added or deleted
var user = {
  name: 'Jeff',
  email: 'jeff@email.com',
};
// (un)commit the methods below to modify the outputs of user
// Object.preventExtensions(user);
// Object.seal(user);

user.password =  'jeffpass';
delete user.email;

console.log(Object.isExtensible(user));
console.log(Object.getOwnPropertyDescriptors(user));
console.log(user);