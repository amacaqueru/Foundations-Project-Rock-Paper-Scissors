console.log("Hello World! This is Odin");

let roca = 0;
let papel = 0;
let tijeras = 0;

function getComputerChoice() {
  let choice = parseInt(Math.random() * 3); // 0, 1, 2

  if (choice == 0) {
    roca++;
    return "rock";
  } else if (choice == 1) {
    papel++;
    return "papers";
  } else {
    tijeras++;
    return "scissors";
  }
}

// function getHumanChoice() {

// let choice = prompt("Enter your choice: Rock, Paper or Scissors").toLowerCase();

//     while(true){
//         // let choice = prompt("Enter your choice: Rock, Paper or Scissors").toLowerCase();

//         if (choice == "rock") {
//             return("rock")

//         }else if (choice == "paper") {

//             return("paper")
//             break;
//         }
//         else if (choice == "scissors") {

//             return("scissors")
//             break;
//         }
//         else {
//             console.log("Invalid choice. Please enter Rock, Paper or Scissors.");
//             choice = prompt("Invalid choice. Please enter Rock, Paper or Scissors.").toLowerCase();
//             // continue;
//         }

// }
// }

let humanScore = 0;
let computerScore = 0;
let partida = 0;

function playRound(humanChoice, computerChoice) {
  console.log(`Human Choice: ${humanChoice}`);
  console.log(`Computer choice: ${computerChoice}`);

  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      console.log("Empates");
      return 0;
    } else if (computerChoice == "papers") {
      console.log("paper wins");
      return 2;
    } else {
      console.log("rock wins");
      return 1;
    }
  } else if (humanChoice == "papers") {
    if (computerChoice == "rock") {
      console.log("paper wins");
      return 1;
    } else if (computerChoice == "papers") {
      console.log("Empates");
      return 0;
    } else {
      console.log("scissors win");
      return 2;
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      console.log("rock wins");
      return 2;
    } else if (computerChoice == "papers") {
      console.log("scissor wins");
      return 1;
    } else {
      console.log("empates");
      return 0;
    }
  }
}

function playGame(buttonChoice) {
  console.log(buttonChoice);
  //   let humanScore = 0;
  //   let computerScore = 0;
  //   let continuar = true;

  console.log(`Partida: ${partida}`);
  let result = playRound(buttonChoice, getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());
  if (result == 1) {
    humanScore++;
  } else if (result == 2) {
    computerScore++;
  }

  if (humanScore >= 5) {
    console.log("Humano gana");
    console.log("Puntuacion final: ");
    console.log(`Humano: ${humanScore}, Computadora: ${computerScore}`);
    humanScore = 0;
    computerScore = 0;
    partida = 0;
    console.log("-----Reset-----\n\n\n");
  } else if (computerScore >= 5) {
    console.log("Computadora gana");
    console.log("Puntuacion final: ");
    console.log(`Humano: ${humanScore}, Computadora: ${computerScore}`);
    humanScore = 0;
    computerScore = 0;
    partida = 0;
    console.log("-----Reset-----\n\n\n");
  }
}

let rockBtn = document.getElementById("rock");
let papersBtn = document.getElementById("papers");
let scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", variableRoca);
papersBtn.addEventListener("click", variablePapers);
scissorsBtn.addEventListener("click", variableScissors);

function variableRoca() {
  partida++;
  playGame(rockBtn.innerText.toLowerCase());
}

function variablePapers() {
  partida++;
  playGame(papersBtn.innerText.toLowerCase());
}

function variableScissors() {
  partida++;
  playGame(scissorsBtn.innerText.toLowerCase());
}

// console.log(rockBtn.innerText.toLowerCase());
// console.log(papersBtn.innerText.toLowerCase());
// console.log(scissorsBtn.innerText.toLowerCase());

// playGame();
