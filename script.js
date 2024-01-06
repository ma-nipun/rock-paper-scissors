const cars = ["rock", "paper", "scissor"]

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 10) + 1)%3
    console.log(cars[choice])
    return cars[choice];
  }

function getUserChoice(){
    let name = prompt("Your Choice");
    if (cars.indexOf(name.toLocaleLowerCase()) !==-1)
    {
        return name.toLocaleLowerCase();
    }
    else
    {
        getUserChoice()
    }
}

function playRound(playerSelection, computerSelection) {
    // Ensure the input is in lowercase for case-insensitive comparison

    // Check for a tie
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    // Check for Rock
    if (playerSelection === 'rock') {
        return (computerSelection === 'scissors') ? 'You Win!' : 'Computer Win!';
    }

    // Check for Paper
    if (playerSelection === 'paper') {
        return (computerSelection === 'rock') ? 'You Win!' : 'Computer Win!';
    }

    // Check for Scissors
    if (playerSelection === 'scissors') {
        return (computerSelection === 'paper') ? 'You Win!' : 'Computer Win!';
    }
  }

//   getComputerChoice()
// getUserChoice()
console.log(playRound("rock",getComputerChoice()) )