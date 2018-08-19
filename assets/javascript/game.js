/*
Javascript for Psychic Game
Computer selects letter
User has 10 tries to get the correct answer
If the correct answer is guessed, wins is incremented
If the wrong answer is guesses, users gets another try, guesses is decremented until no guesses left
If no guesses left, losses is incremented, new game starts
*/

// Declare variables
// array of letters for the computer to select
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// variables to be used to track status in the game
var wins = 0;
var losses = 0;
var guessRemaining = 10;
var guessList = [];
var firstPass = true;

// variables for guesses
var userGuess = ' ';
var computerSelected = ' ';

// Debug - log variables
function logVariables(msg) {
  console.log("==========");
  console.log("Context:" + msg);
  console.log("letters: " + letters);
  console.log("wins: " + wins);
  console.log("losses: " + losses);
  console.log("guesses remaining: " + guessRemaining);
  console.log("guess list: " + guessList);
  console.log("first pass: " + firstPass);
  console.log("user guess: " + userGuess);
  console.log("computerSelected: " + computerSelected);
  console.log("----------");
}
/* function - game reset() - if first pass, set all variables to initial values - after that, reset guesses to 10, have computer select new value
*/
function gameReset() {
  if (firstPass) {
    wins = 0;
    losses = 0;
    guessRemaining = 10;
    guessList = [];
    userGuess = ' ';
    firstPass = false;
  }
  else {
    guessRemaining = 10;
    guessList = [];
    userGuess = ' ';
  }
}

// function - computer select a letter to be guessed
function letterSelected() {
  console.log("letterSelected");
  console.log("----------");
  var selected = letters[Math.floor(Math.random() * letters.length)];
  return selected;
}

// function - increment wins
function updateWins() {
  console.log("updateWins");
  console.log("----------");
  wins += 1;
  console.log("wins: " + wins);
  document.getElementById("winsHTML").innerHTML =("Wins: " + wins);
}

// function - decrement guess remaining
function decrementGuesses () {
  guessRemaining--;
}
// function - add guess to list
// function - increment losses

// main logic
logVariables("start");
gameReset();
logVariables("gameReset");

// computer selected letter
computerSelected = letterSelected();
logVariables("computer selected");

// user guess collected
document.onkeyup = function(event) {
  userGuess = event.key;
  console.log("guess: " + userGuess);
  logVariables('user selected');

  if (!(userGuess >= 'a' && userGuess <= 'z')) {
    alert("Invalid Key Chosen");
  }
  else if (userGuess === computerSelected) {
    updateWins();
  }
  else {
    decrementGuesses();
  }
}
// userGuess = getGuess();
// console.log("guess: " + userGuess);
// logVariables('user selected');

// // user guessed correctly
// if (userGuess === computerSelected) {
//   console.log("user guess matched");
//   console.log("----------");
//   updateWins();
// }

  //   // user guess correctly
  //   if (userGuess === computerSelected) {
  //     updateWins();
  //   }
  //   else if (GuessRemaining === 0) {
  //     updateLosses();
  //     gameReset()
  //   }

