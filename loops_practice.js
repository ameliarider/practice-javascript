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