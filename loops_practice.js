// // var number = 1;
// // while (number <= 10) {
// //   console.log(number);
// //   number = number + 1
// // }

// // For loop

// // for (declare variable; some condition; increment) {
// //   do something
// // }

// // Write a while loop that prints the word "hello" 5 times.

// var i = 0;
// while (i < 5) {
//   console.log("hello");
//   i += 1;
// }

// // Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

// // while (true) {
// //   var input = window.prompt("Enter a word: ");
// //   if (input == "stop") {
// //     break;
// //   }
// // }

// // Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

// var number = 0;
// while (number <= 100) {
//   console.log(number);
//   number += 5;
// }

// Start with an array of numbers and create a new array with only the numbers less than 20.
// For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

// var nums = [1,5,10,15,25,30];
// var smallNums = [];
// var i = 0;

// while (i < nums.length) {
//   var num = nums[i];
//   if (num < 20) {
//     smallNums.push(nums[i]);
//   }
//   i++;
// }

// console.log(smallNums);

// Start with an array of strings and create a new array with only the strings that start with the letter "w".
// For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

// var strings = ["hello","goodbye","welcome","where"];
// var wStrings = [];

// strings.forEach(function (string) {
//   if (string[0] === "w") {
//     wStrings.push(string);
//   }
// });

// console.log(wStrings);

// // Start with an array of numbers and create a new array with only the numbers less than 20.
// // For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

// // var numbers = [1,5,10,20,25];
// // var smallNumbers = [];
// // index = 0;

// // while (index < numbers.length) {
// //   var number = numbers[index];
// //   if (number < 20) {
// //     smallNumbers.push(number);
// //   }
// //   index += 1;
// // }

// // console.log(smallNumbers);

// // var numbers = [1,5,10,20,25,6];
// // var smallNumbers = [];

// // numbers.forEach(function (number) {
// //   if (number < 20) {
// //     smallNumbers.push(number);
// //   }
// // });
// // console.log(smallNumbers);

// // var numbers = [1,5,10,25,6]
// // var smallNumbers = numbers.filter(function (number) {
// //   return number < 20;
// // });

// // console.log(smallNumbers);

// // console.log(greet("Amelia"));

// // function greet(name) {
// //   return `Hello my name is ${name}`;
// // }

// // console.log(greet("Amelia"));

// // for loops

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// // while loop

// let count = 0;

// while (count < 3 ) {
//   console.log(count);
//   count++;
// }

// // do ... while loop
// // always get one iteration of the loop since the condition is at the end

// // do {
// //   logic
// // } while (condition)

// let number = 5;

// do {
//   console.log("Number is:", number);
//   number--;
// } while (number > 0);

// // for ... in loop - objects

// const person = {
//   name: "Amelia",
//   age: 27
// }

// for (let key in person) {
//   console.log(key, "=", person[key]);
// }

// // for ... of - arrays

// const fruits = ["apple", "banana", "cherry"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// for (let index in fruits) {
//   console.log(fruits[index]);
// }
// Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

// const strings = ["hello", "goodbye"];
// const upcasedStrings = [];

// strings.forEach(function (string) {
//   upcasedStrings.push(string.toUpperCase());
// });
// console.log(upcasedStrings);