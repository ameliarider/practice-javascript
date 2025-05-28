// // 1. Pull in Node's built-in readline library
// const readline = require('readline');

// // 2. Create an interface object that can read from the keyboard
// //    (process.stdin) and write to the screen (process.stdout)
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // 3. Ask the user a question.
// //    When they press Enter, the callback receives their answer as `name`.
// rl.question("What's your name? ", (name) => {
//   // 4. Use template literals to greet the user
//   console.log(`Hi, ${name}!`);

//   // 5. Close the interface so the program can exit cleanly
//   rl.close();
// });


// 1. Pull in Node's built-in readline library
const readline = require('readline');

// 2. Create an interface object that can read from the keyboard
//    (process.stdin) and write to the screen (process.stdout)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 3. Ask the user a question.
//    When they press Enter, the callback receives their answer as `name`.
rl.question("Enter a word: ", (name) => {
  // 4. Use template literals to greet the user
  console.log(`Hi, ${name}!`);

  // 5. Close the interface so the program can exit cleanly
  rl.close();
});