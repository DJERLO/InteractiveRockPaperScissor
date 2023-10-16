// Define the scores, previous player move, and choice frequencies
let playerScore = 0;
let computerScore = 0;
let previousPlayerMove = null;
let choiceFrequencies = { rock: 0, paper: 0, scissor: 0 };
let countdownInterval; // Define a variable for the interval
let winner = "No one"; // Default: Define the winner of the game
let roundLimit;        //Set the Limit of Round
const gameButtonsContainer = document.getElementById("game-buttons");

// Function to start the game
function startGame(rounds){ 
  playerScore = 0;
  computerScore = 0;
  previousPlayerMove = null;
  choiceFrequencies = { rock: 0, paper: 0, scissor: 0 };
  
  roundLimit = rounds;
  startCountdown();
}
//Function that handles the game
function play(playerChoice) {
    // Clear the previous interval to avoid issues
    clearInterval(countdownInterval);

    // Reset the retry count when the player makes a move
    //resetRetryCount();
    
    let computerChoice;
    const computerChoices = ['rock', 'paper', 'scissor'];
    
    // Determine the computer's choice randomly on the first attempt so it less predictable
    if (previousPlayerMove === null) {
        const randomIndex = Math.floor(Math.random() * computerChoices.length);
        computerChoice = computerChoices[randomIndex];
    } else {
        // After we use the strategy for subsequent moves
        computerChoice = determineComputerChoice();
    }
  
    // Display player 1's choice
    document.getElementById("player1-choice").textContent = playerChoice;

    // Display computer's choice
    document.getElementById("player2-choice").textContent = computerChoice;

    // Determine the winner based on the choices
    let result;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        result = "You win!";
        playerScore = playerScore + 1;
    } else {
        result = "You lose!";
        computerScore = computerScore + 1;
    }

    // Update and display the scores
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;

    // Update the choice frequencies
    choiceFrequencies[playerChoice]++;

    // Display the result
    document.getElementById("game-result").textContent = result;

    // Update the previous player move
    previousPlayerMove = playerChoice;

    // Check if the game has ended due to a player reaching the round limit
    if (playerScore === roundLimit || computerScore === roundLimit) {
        let result;
        if (playerScore > computerScore) {
            result = "Player";
            playPlayer1WinsSound(); 
        } else if (playerScore < computerScore) {
            result = "Computer";
            playPlayer2WinsSound(); 
        }

        // Display the winner
        document.getElementById("game-result").textContent = `${result} Wins!`;
        hideGameButton(); //Hides the GameButtons
        //showWinnerNotification(result);

        setTimeout(() => {
            resetGame();
        }, 2000); // 2 seconds delay before starting a new round
    } else {
        // Start the countdown timer when the player makes a choice
        startCountdown();
    }
}
// Function to start the countdown timer
function startCountdown() {
    showGameButton();
    const countdownDisplay = document.getElementById("countdown-display");
    const countdownMessage = document.getElementById("countdown-message");
    const gameButtons = document.querySelectorAll(".game-option button");

    let countdown = 10; // Set the initial countdown time in seconds

    countdownMessage.textContent = "Get ready to choose!"; // Initial message

    countdownInterval = setInterval(function () { // Assign the interval to the variable
        countdownDisplay.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval); // Clear the interval
            hideGameButton();
            countdownMessage.textContent = "Time's up!";
            //handlePlayerInactivity();
            // Display the result
            document.getElementById("game-result").textContent = winner + " Wins!";
            // showWinnerNotification(winner);
            setTimeout(function () {
                chooseWinner(previousPlayerMove); // Chooses the who is the victor of the game
                resetGame(); // Resets the Game
            }, 2000); // 2 seconds delay
        }
    }, 1000); // Update every second
}
// Function to reset the game with a 5-second delay
function resetGame() {
    clearInterval(countdownInterval); // Clear the countdown interval
    const countdownDisplay = document.getElementById("countdown-display");
    const countdownMessage = document.getElementById("countdown-message");
    const gameButtons = document.querySelectorAll(".game-option button");
    const playerScoreDisplay = document.getElementById("player-score");
    const computerScoreDisplay = document.getElementById("computer-score");
  
    playerScore = 0;
    computerScore = 0;

  // Clear player 1's choice
  document.getElementById("player1-choice").textContent = '';

  // Clear computer's choice
  document.getElementById("player2-choice").textContent = '';

    countdownDisplay.textContent = "Game will start in a moment..."; // Reset the message
    countdownMessage.textContent = ''; // Clear the message
    document.getElementById("game-result").textContent = ''; // Clear the game result
    playerScoreDisplay.textContent = '0'; // Reset player score display
    computerScoreDisplay.textContent = '0'; // Reset computer score display
    choiceFrequencies = { rock: 0, paper: 0, scissor: 0 }; // Reset the choice frequencies

    // Add a 5-second delay before calling startCountdown
    setTimeout(function () {
        //startCountdown();
        displayModal();
    }, 5000); // 5 seconds delay
}
//Function that determines the Player's choice to counters the player's most frequent choice
function determineComputerChoice() {
    // Basic strategy: computer counters the player's most frequent choice
    const playerMostFrequentChoice = Object.keys(choiceFrequencies).reduce((a, b) => choiceFrequencies[a] > choiceFrequencies[b] ? a : b);

    if (playerMostFrequentChoice === 'rock') {
        return 'paper';
    } else if (playerMostFrequentChoice === 'paper') {
        return 'scissor';
    } else {
        return 'rock';
    }
}
// Function to choose the winner at the end of the match
function chooseWinner(playerChoice) {

  if (!playerChoice) {
    winner = "No one"; // It's a tie
  } 
  else {
    
    // If the timers go to zero
    if (playerScore === computerScore) {
      winner = "No one"; // It's a tie
    } 
    else {

      if (playerScore > computerScore) {
        winner = "Player"; // Player wins the match
      } else if (playerScore < computerScore) {
        winner = "Computer"; // Computer wins the match
      }else{
         winner = "No one"; // It's a tie
      }
    }
    // If the Round ends
    if (playerScore === roundLimit || computerScore === roundLimit) {
      if (playerScore > computerScore) {
        winner = "Player"; // Player wins the match
      } else if (playerScore < computerScore) {
        winner = "Computer"; // Computer wins the match
      }else {
        winner = "No one"; // It's a tie
      }
     
    }
  }
  // Display the result
  document.getElementById("game-result").textContent = winner + " Wins!";
  // showWinnerNotification(winner);
}

