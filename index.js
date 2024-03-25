#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with  computer generate number and show result
const randomNumber = Math.floor(Math.random() * 2 + 1);
console.log("welcome to number guessing game");
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-2: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed the right number");
}
else {
    console.log("you guessed the wrong number please try again");
}
