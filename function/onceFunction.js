// Function that can be called only once
function template() {
  return`
      <button>Submit</button>
  `;
}
console.log(template());

var once = (fn, ...args) => {
  let called = false;
  return function() {
    if(!called) {
      called = true;
      return fn(...args);
    }
  }
}

var onClick = (text, time) =>
alert(`${text} at ${time}`);

var button = document.querySelector('button');
button.addEventListener('click', once(onClick, 'Subited', new Date(Date.now())));
