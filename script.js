

console.log("Hello World! This is Odin")

let roca = 0;
let papel= 0;
let tijeras = 0;

function getComputerChoice() {

    let choice = parseInt(Math.random() * 3) // 0, 1, 2
    
    if (choice == 0) {
        roca++;
        return("Rock")
    }else if (choice == 1) {
        papel++;
        return("Paper")
    }
    else {
        tijeras++;
        return("Scissors")
    }



}

function getHumanChoice() {
    let choice = prompt("Enter your choice: Rock, Paper or Scissors");
    if (choice == "Rock") {
        roca++;
        return("Rock")
    }else if (choice == "Paper") {
        papel++;
        return("Paper")
    }
    else if (choice == "Scissors") {
        tijeras++;
        return("Scissors")
    }
    else {
        console.log("Invalid choice. Please enter Rock, Paper or Scissors.");
        return getHumanChoice();
    }
}



let computerChoice = "";

for (let i = 0; i < 1000; i++) {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
}





