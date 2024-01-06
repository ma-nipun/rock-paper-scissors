function getComputerChoice() {
    const cars = ["Rock", "Paper", "Scissor"]
    let choice = Math.floor((Math.random() * 10) + 1)%3
    console.log(cars[choice])
    // return p1 * p2;
  }

  getComputerChoice()