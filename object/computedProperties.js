//computed properties

var username = document.querySelector('[name="username"]');
var password = document.querySelector('[name="password"]');

var state = {};

var onKeyUp = event => {
  var value = event.target.value;
  var name = event.target.name;

  state[name] = value;
}

username.addEventListener('keyup', onKeyUp);
password.addEventListener('keyup', onKeyUp);