// // Write a method that takes in a number and returns the number times two. Then run the method and print the result.

// function doubled(number) {
//   return number * 2;
// }

// console.log(doubled(4));

// // Write a method that takes in a string and returns the string with all capital letters. Then run the method and print the result.

// function uppercase(word) {
//   return word.toUpperCase();
// }

// console.log(uppercase("hello"));

// // Write a method that takes in two numbers and returns the first number subtracted by the second. Then run the method and print the result.

// function addition(num1, num2) {
//   return num2 - num1;
// }

// console.log(addition(1,3));

// Write a method that takes in a number and returns the number times itself. Then run the method and print the result.

// function doubled(num) {
//   return num * num;
// }

// console.log(doubled(8));

// Write a method that takes in a string and returns the first letter of the string. Then run the method and print the result.

// function firstLetter(string) {
//   return string[0];
// }

// console.log(firstLetter("hello"));

// Write a method that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the method and print the result.

// function combinedStrings(a,b,c) {
//   return `${a} ${b} ${c}`;
// }

// console.log(combinedStrings("hello", "welcome", "goodbye"));

// Write a method that takes in a number and returns the number as a string. Then run the method and print the result.

// function toString(number) {
//   return number.toString();
// }

// console.log(toString(6));

// // Write a method that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the method and print the result.


// function average(number1, number2, number3) {
//   return (number1 + number2 + number3) / 3;
// }

// console.log(average(1,2,3));

// // Write a method that takes in a string and returns the string with all capital letters. Then run the method and print the result.

// function capitalize(string) {
//   return string.toUpperCase();
// }

// console.log(capitalize("hello"));

// // Write a method that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the method and print the result.

// function average(number1,number2,number3) {
//   return (number1 + number2 + number3) / 3.0;
// }

// console.log(average(1,2,3));

// Write a ShoppingCart class that stores an array of items with methods to add an item, remove an item, and display all the items.

class ShoppingCart {
  constructor() {
    this.items = [];
  }


  addItem(item) {
    this.items.push(item);
  }

  deleteItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  displayItems(items) {
    console.log("Shopping Cart Items");
    this.items.forEach((item) => {
      console.log(item);
    });
  }
}

const cart = new ShoppingCart();
cart.addItem("Apple");
cart.addItem("Banana");
cart.addItem("Orange");
cart.displayItems();
cart.deleteItem("Banana");
cart.displayItems();