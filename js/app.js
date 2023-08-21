"use strict"
//Greeting 
let userName = prompt("Hello, Im Avi! What's your name?");
alert("Im glad you are here " + userName + "! Let's play a little guessing game all about me.");

const playerPointsPara = document.getElementById("player-points");
// Prompt the user and store answer in var
let interestPrompt = prompt("Is Avi passionate about coding?");
let whereFromPrompt = prompt("Was Avi born and raised in the city of New Orleans?");
let pastJobsPrompt = prompt("Is Avi a Uninted States Veteran?");
let animalPrompt = prompt("Does Avi have a dog?");
let jobPropmt = prompt("Does Avi have a job?");


// Display the user's answers and update score
let playerPoints = 0;

function playGame() {
    function gameChoice() {

        if (interestPrompt == "yes") {
            alert("By George, I think she's got it! " + interestPrompt + ", Avi loves to code!");
            playerPoints++
        } else {
            alert("You are so wrong about that!");
        }
        if (whereFromPrompt == "yes") {
            alert("You are so damn smart. Avi's family history can be traced back 200 years ago in New Orleans from Haiti.");
            playerPoints++
        } else {
            alert("Wrong! Avi was indeed born and raised in New Orleans and her family has been here for over 2 centuries.");

        }
        if (pastJobsPrompt == "yes") {
            alert("Wow! How did you guess? Yes, Avi was honorably discharged as a Human Resources Specialist of the United States Army.");
            playerPoints++
        } else {
            alert("Wrong, Avi is a proud veteran of the United States Army.");
        }
        if (animalPrompt == "no") {
            alert("Thats correct. Avi is a cat lady");
            playerPoints++
        } else {
            alert("Wrong, Avi is a cat lady.");
        }
        if (jobPropmt == "no") {
            alert("Your right! Avi refuses to work unless she's coding.");
            playerPoints++
        } else {
            alert("Your wrong, Unfortunately Avi has not as of yet gotten paid to code.");
        }

    }
    gameChoice()
    prompt("One last question, how many years have I been studying code?");
    if (prompt < 4) {
        alert("That is too low.")
    } else if (propt > 4) {
        alert("That is too high.")
    } else {
        alert("Spot on!")
    }

    console.log(playerPoints);

    playerPointsPara.innerHTML = playerPoints;
