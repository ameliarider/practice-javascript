// // Create an array to store 3 words. Then add two more words to the array and print the array on one line.

// var iceCreams = ["vanilla", "chocolate", "strawberry"];
// iceCreams.push("rocky road");
// iceCreams.push("cookies and cream");
// console.log(iceCreams);

// // Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

// var letters = ["A", "B", "C", "D"];
// letters[1] = 2

// console.log(letters)

// // Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

// numbers = [1,2,3,4,5];
// index = 0;

// while (index < numbers.length) {
//   console.log(numbers[index])
//   index += 1
// }

// // Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

// numbers = [1];
// numbers.push(2);
// numbers.push(3);

// console.log(numbers);

// Make a hash to store 3 different states and their capitals. Then add a new state and capital and print the hash to see the result

// var states = [
//   {state: "California", capitol: "Sacramento"},
//   {state: "New York", capitol: "Albany"},
//   {state: "Oregon", capitol: "Salem"}
// ];

// // console.log(states);

// states.push({state: "Arkansas", capitol: "Little Rock"});

// console.log(states);

// Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

// const people = [ 
//   {name: "Amelia", age: 27},
//   {name: "Hannah", age: 30},
//   {name: "Gwyneth", age: 24}
// ];

// console.log(people[0].name);

// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

const arrays = [[1, 3], [8, 9], [2, 16]];
let hashes = {};
let i = 0;

// arrays.forEach((array) => {
//   let key = array[0];
//   let value = array[1];
//   hashes[key] = value;
// });

// console.log(arrays);
// console.log(hashes);

while (i < arrays.length) {
  let key = arrays[i][0];
  let value = arrays[i][1];
  hashes[key] = value;
  i += 1;
}

console.log(arrays);
console.log(hashes);