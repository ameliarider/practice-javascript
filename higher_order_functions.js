// forEach();
// Iterates over each element but doesn't return anything

// const numbers = [1,2,3,4,5];

// numbers.forEach((number) => {
//   console.log(number);
// });

//map()
// creates a new array by applying a function to each element

// const numbers = [1,2,3,4,5];
// const squares = numbers.map(num => num ** 2);

// console.log(squares);

// filter()
// returns a new array of elements that pass a certain condition

// const numbers = [1,2,3,4,5,6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers);

// reduce()
// reduces an array to a single value by accumulating each element

// const numbers = [1,2,3,4,5];
// const sum = numbers.reduce((total, num) => total + num, 0);

// console.log(sum);

// Destructuring
// can extract values from arrays or objects
// const rgb = [255, 200, 0];
// // const [red, green, blue] = rgb;

// // console.log(red);
// // console.log(green);
// // console.log(blue);

// const nested = [1, [2, 3], 4];
// const [one, [two, three], four] = nested;

// console.log(one, two, three, four);
// // console.log(two);

// const user = {
//   name: "Amelia",
//   age: 27,
//   city: "San Francisco"
// }

// const {name, age} = user;

// console.log(name, age);
// console.log(`${name} is ${age} years old and lives in ${user.city}.`);

// Rest and Spread Operators

// Rest operator (...rest)
// Gather remaining elements into an array or object - used for function parameters

// function sum(...numbers) {
//   return numbers.reduce((total, number) => total + number, 0);
// }

// console.log(sum(1,2,5));

// const [first, second, ...others] = [10,20,30,40];
// console.log(first);
// console.log(second);
// console.log(others);

// Spread Operator
// Expand elements from an array or object into a new context

// const arr1 = [1,2,3];
// const arr2 = [...arr1,4,5,6];
// const arr3 = [1,2, ...arr2];

// console.log(arr2);
// console.log(arr3);

// const obj1 = {a: 1, b: 2};
// const obj2 = {...obj1, c: 3};

// // console.log(obj2);

// const merged = { ...obj1, ...{b: 5, d: 10}};

// console.log(merged);

// spread in function calls

function multiply(...numbers) {
  return numbers.reduce((total, number) => total * number, 1);
}
const nums = [2,3,4,10];
console.log(multiply(...nums));