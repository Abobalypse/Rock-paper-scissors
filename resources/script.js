const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput
    } else {
        console.log("Please enter a valid type");
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

const playRound = (userChoice, computerChoice) => {
console.log("Player's choice is: " + userChoice);
console.log("Computer's choice is: " + computerChoice);

    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Sorry, computer wins!';
        } else {
            return 'Congratulations, you win!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry, computer wins!';
        } else {
            return 'Congratulations, you win!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Sorry, computer wins!';
        } else {
            return 'Congratulations, you win!';
        }
    }
};


let userChoice = 'rock';
let computerChoice = getComputerChoice();
console.log(playRound(userChoice, computerChoice));
