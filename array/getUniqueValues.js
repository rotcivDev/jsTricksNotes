const username = ['Jeff', 'Doug', 'John', 'John', 'Jeff'];

let dupFilter = names => {
  filteredData = names.filter((name, index, array) => {
    if(array.indexOf(name) === index) {
      return name;
    }
  });
  return filteredData;
} 
console.log(dupFilter(username));

let anotherDupFilter = names => {
  filteredData = names.filter((name, index, array) => array.indexOf(name) === index ? name : '');
  return filteredData;
};
console.log(anotherDupFilter(username));

let setFilter = new Set(username);
console.log(setFilter);

let setFilterAsArray = [...new Set(username)];
console.log(setFilterAsArray);