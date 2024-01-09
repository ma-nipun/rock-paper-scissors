const cars = ["rock", "paper", "scissor"]

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 10) + 1)%3
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
    console.log(playerSelection+" "+ computerSelection)
    if (playerSelection === computerSelection) {
        return "tie";
    }

    // Check for Rock
    if (playerSelection === 'rock') {
        return (computerSelection === 'scissors') ? 'You' : 'Computer';
    }

    // Check for Paper
    if (playerSelection === 'paper') {
        return (computerSelection === 'rock') ? 'You' : 'Computer';
    }

    // Check for Scissors
    if (playerSelection === 'scissors') {
        return (computerSelection === 'paper') ? 'You' : 'Computer';
    }
  }


function game(){
    let user = 0
    let computer = 0
    for (let i = 0; i < 5; i++) {
        let winner = playRound(getUserChoice(),getComputerChoice())
        if (winner == 'You'){
            user++;
        }
        if (winner == 'Computer'){
            computer++;
        }
      }
      if(user == computer){
        return "Tie"
      } else if (user > computer){
        return "you won"
      }else {
        return "computer won"
      }
}

function game_gui(){
  let winner = game()
  document.getElementById("winner").innerHTML = winner;
}
// console.log(game())