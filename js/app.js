"use strict";
//Greeting
let userName = prompt("Hello, Im Avi! What's your name?");
alert("Im glad you are here " + userName + "! Let's play a little guessing game all about me.");


// Prompt the user and store answer in var
let interestPrompt = prompt("Is Avi passionate about coding?");
let whereFromPrompt = prompt("Was Avi born and raised in the city of New Orleans?");
let pastJobsPrompt = prompt("Is Avi a Uninted States Veteran?");
let animalPrompt = prompt("Does Avi have a dog?");
let currentJobPropmt = prompt("Does Avi have a job?");


let playerPoints = 0;
const playerPointsPara = document.getElementById("player-points");
function playGame() {
  function gameChoice(){
    if(interestPrompt.toUpperCase()==="YES"){
      playerPoints++;
      alert("By George, I think she's got it! " + interestPrompt + ", Avi loves to code!");
    }else{
      alert("Wrong, Avi is pasionate about coding.");
    }
    if(whereFromPrompt.toUpperCase()==="YES"){
      alert("You already knooooow, in my Big Freedia voice. Avi's family history can be traced back 200 years ago in New Orleans from Haiti.");
      playerPoints++;
    }else{
      alert("Wrong! Avi was indeed born and raised in New Orleans and her family has been here for over 2 centuries.");
    }
    if(pastJobsPrompt.toUpperCase()==="YES"){
      alert("Wow! How did you guess? Yes, Avi was honorably discharged as a Human Resources Specialist of the United States Army.");
      playerPoints++;
    }else{
      alert("Wrong, Avi is a proud veteran of the United States Army.");
    }
    if(currentJobPropmt.toUpperCase()=== "YES"){
      alert("Your wrong, Unfortunately Avi has not as of yet gotten paid to code.");
    }else{
      alert("Your right! Avi refuses to work unless she's coding.");
      playerPoints++;
    }
    if(animalPrompt.toUpperCase()==="YES"){
      alert("Wrong, Avi is a cat lady.");
    }else{
      alert("Thats correct. Avi is a cat lady");
      playerPoints++;
    }
  }
  gameChoice();
  prompt("One last question, how many years have I been interested coding?");
  let number;
  function yearsCoding() {
    let counter = 1;
    if (counter === 5) {
      alert('Sorry you run out of guesses');
    }
    while (counter < 5 && number !== 4) {
      let number = parseInt(prompt("One last question, how many years have I been interested coding?")
      );
      if (number > 4) {
        alert('You guessed too high! Guess again');
        counter++;
      } else if (number < 4) {
        alert('You guessed too low! Guess again');
        counter++;
      }
    }
    if (number === 4) {
      alert('That is correct! My favorite number is 33!');
      playerPoints++;
      counter = 5;
    }
  }

  yearsCoding();


  console.log(playerPoints);

  playerPointsPara.innerHTML = playerPoints;
}
// Display the user's answers and update score



playGame();
