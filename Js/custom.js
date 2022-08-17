console.log("Window Location:", window.location);
const myKeysValue = window.location.search;
console.log("keys, & values:", myKeysValues);

const urlParams = new URLSearchParams(myKeysValue);

const param1 = urlParams.get('name');
const param2 = urlParams.get('age');

console.log("Name:", param1)
console.log("age:", param2)


