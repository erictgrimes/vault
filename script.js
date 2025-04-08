// Create 3 math calculations with different operators
// Each one eaquals 1 of the 3 numbers in the combination
// Combination 10 - 40 - 39
// Each stored in a variable
// Create a message that shows the combination
// The message "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
// Present the string to the user (not console.log)

//each variable is checked using console.log
// 1st equation using divide operator equals 10
const firstNum = 20 / 2;
console.log(firstNum);

// 2nd equation using multiple minus operators equals 40
const secondNum = 89 - 20 - 29;
console.log(secondNum);

// 3rd equation using multiple addition operators equals 39
const thirdNum = 4 + 5 + 10 + 20;
console.log(thirdNum);

// The message displayed to the user using alert
alert(
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination: " +
    firstNum +
    " - " +
    secondNum +
    " - " +
    thirdNum
);
