// Measure time it takes function to run

var gerUserData = async user => await fetch(`https://api.github.com/users/${user}`);

var time = (fn, ...args) => {
  console.time('time');
  let result = fn(...args);
  console.timeEnd('time');
  return result;
};

time(() => gerUserData('rotcivdev'));
