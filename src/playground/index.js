let userName = "john";
let choices = ["rock", "paper", "scissors"];
let userInput = 0;
let randomNumber = Math.floor(Math.random() * choices.length);
let userChoice = choices[userInput];
let computerChoice = choices[randomNumber];

if (computerChoice === "rock") {
  if (userChoice === "rock") {
    console.log(`${userName}'s choice is the same as the computer's !`);
  } else if (userChoice === "paper") {
    console.log(`${userName} won :) `);
  } else {
    console.log(`${userName} lost :(`);
  }
}

if (computerChoice === "paper") {
  if (userChoice === "paper") {
    console.log(`${userName}'s choice is the same as the computer's !`);
  } else if (userChoice === "scissors") {
    console.log(`${userName} won :) `);
  } else {
    console.log(`${userName} lost :(`);
  }
}

if (computerChoice === "scissors") {
  if (userChoice === "scissors") {
    console.log(`${userName}'s choice is the same as the computer's !`);
  } else if (userChoice === "rock") {
    console.log(`${userName} won :) `);
  } else {
    console.log(`${userName} lost :(`);
  }
}
