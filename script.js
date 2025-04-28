

console.log("Hello World! This is Odin")

let roca = 0;
let papel= 0;
let tijeras = 0;

function getComputerChoice() {

    let choice = parseInt(Math.random() * 3) // 0, 1, 2
    
    if (choice == 0) {
        roca++;
        return("rock")
    }else if (choice == 1) {
        papel++;
        return("paper")
    }
    else {
        tijeras++;
        return("scissors")
    }



}

function getHumanChoice() {
    
let choice = prompt("Enter your choice: Rock, Paper or Scissors").toLowerCase();

    while(true){
        // let choice = prompt("Enter your choice: Rock, Paper or Scissors").toLowerCase();
        

        if (choice == "rock") {
            return("rock")

        }else if (choice == "paper") {
            
            return("paper")
            break;
        }
        else if (choice == "scissors") {
            
            return("scissors")
            break;
        }
        else {
            console.log("Invalid choice. Please enter Rock, Paper or Scissors.");
            choice = prompt("Invalid choice. Please enter Rock, Paper or Scissors.").toLowerCase();
            // continue;
        }
        
}
}




// let humanScore = 0;
// let computerScore = 0;

function playRound(humanChoice , computerChoice ) {
    console.log(`Human Choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`); 

    if (humanChoice == "rock") {
        if(computerChoice == "rock"){
            console.log("Empates");
            return 0;

        }else if(computerChoice == "paper"){
            return 2;

            
        }
        else{
            return 1;
            
        }

        
    }


    else if (humanChoice == "paper") {
        if(computerChoice == "rock"){
            return 1;

            
        }else if(computerChoice == "paper"){
            console.log("Empates")
            return 0;

            
        }
        else{
            return 2;

            
        }

        
    }
    else if (humanChoice == "scissors") {
        if(computerChoice == "rock"){
            return 2;

            
        }else if(computerChoice == "paper"){
            return 1;

            
        }
        else{
            return 0;

            
        }

        
    }

}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let continuar = true;

    let partida = 0;

    while(continuar){
        partida++;
        console.log(`Partida: ${partida}`);
        let result = playRound(getHumanChoice(), getComputerChoice());
        // playRound(getHumanChoice(), getComputerChoice());
        if (result == 1) {
            humanScore++;
        }
        else if (result == 2){
            computerScore++;
        }

        if (humanScore >= 3){
            console.log ("Humano gana");
            console.log("Puntuacion final: ")
            console.log(`Humano: ${humanScore}, Computadora: ${computerScore}`)
            continuar = false;
        }
        else if (computerScore >= 3){
            console.log("Computadora gana");
            console.log("Puntuacion final: ")
            console.log(`Humano: ${humanScore}, Computadora: ${computerScore}`)
            continuar = false;
        }
    }
    
}



playGame();