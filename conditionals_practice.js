// // Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:

// // If the age is 12 years old or younger, the ticket price is $5.
// // If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
// // If the customer is 60 years old or older, the ticket price is $7.

// var age = 61;
// var movieTime = 8;

// if (age < 12) {
//   console.log("Ticket price is $5");
// } else if (age >= 13 && age <= 59 && movieTime < 6) {
//   console.log("Ticket price is $7");
// } else if (age >= 13 && age <= 59 && movieTime > 6) {
//   console.log("Ticket price is $10");
// } else {
//   console.log("Ticket price is $7");
// }

// // Write a program to store the type of book (regular, reference, or special collection) and the number of days its overdue. Then calculate the fine amount based on the following conditions:

// // If the book is a regular book and overdue by up to 7 days, the fine is $1 per day.
// // If the book is a regular book and overdue by more than 7 days, the fine is $2 per day.
// // If the book is a reference book, there is no fine, regardless of the number of days overdue.
// // If the book is a special collection book, the fine is $5 per day, regardless of the number of days overdue.

// var type = "special collection"
// var overdue = 8

// if (type == "regular" && overdue <= 7) {
//   var fine = 1;
// } else if (type == "regular" && overdue > 7) {
//   var fine = 2;
// } else if (type == "reference") {
//   var fine = 0;
// } else {
//   var fine = 5;
// }

// console.log(`Your fine is $${fine} per day.`)

// // Write a program that stores a person's order value and membership level (regular or premium). Then calculate a discount amount based on the following conditions:

// // If the total order value is less than $50, there is no discount.
// // If the total order value is between $50 and $100, the discount is 5% for regular customers and 10% for premium customers.
// // If the total order value is greater than $100, the discount is 10% for regular customers and 15% for premium customers.

// var orderValue = 25;
// var membership = "regular";

// if (orderValue < 50) {
//   discount = 0;
// } else if (orderValue >= 50 && orderValue <= 100 && membership == "regular") {
//   discount = 0.05;
// } else if (orderValue >= 50 && orderValue <= 100 && membership == "premium") {
//   discount = 0.1;
// } else if (orderValue > 100 && membership == "regular") {
//   discount = 0.1;
// } else if (orderValue > 100 && membership == "premium") {
//   discount = 0.15;
// }

// var discountAmount = orderValue * discount

// console.log(`Your discount is $${discountAmount}.`)

// // Write a Ruby program that stores the weight of a package and the destination (domestic or international). Then calculate the shipping fee based on the following conditions:

// // If the destination is domestic:
// // If the weight is less than or equal to 1 kg, the shipping fee is $5.
// // If the weight is greater than 1 kg, the shipping fee is $10.
// // If the destination is an international shipment:
// // If the weight is less than or equal to 1 kg, the shipping fee is $15.
// // If the weight is greater than 1 kg, the shipping fee is $25.

// var destination = "international";
// var weight = 0.5

// if (destination == "domestic" && weight <= 1) {
//   shippingFee = "$5";
// } else if (destination == "domestic" && weight > 1) {
//   shippingFee = "$10";
// } else if (destination == "internation" && weight <= 1) {
//   shippingFee = "$15";
// } else {
//   shippingFee = "$25";
// }

// console.log(shippingFee)

// // Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.

// var num1 = -2;
// var num2 = -2;

// if (num1 < 0 && num2 > 0) {
//   console.log(1);
// } else {
//   console.log(0);
// }

// Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

// var num = 30;

// if (num < 10) {
//   console.log(9);
// } else if (num >=10 && num < 20) {
//   console.log(19);
// } else if (num >= 20 && num <30) {
//   console.log(29);
// } else {
//   console.log(-1);
// }

// Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

// var num = -2;

// if (num < 0) {
//   console.log(1776);
// } else {
//   console.log(1979);
// }

// // switch conditionals

// const day = "Monday";

// switch (day) {
// case "Monday":
//   console.log("Start of the week!");
//   break;
// case "Tuesday":
//   console.log("It's Tuesday!");
//   break;
// default:
//   console.log("Enjoy your day!");
//   break;
// }

// // ternary operator

// const age = 12;

// const canDrive = (age >= 16) ? "Yes" : "No";

// console.log(canDrive);

if (0) console.log("success");