// Get the modal element
const modal = document.getElementById("gameLimitModal");

// Get the buttons to select the game limit
const bestOfThreeBtn = document.getElementById("bestOfThreeBtn");
const bestOfFiveBtn = document.getElementById("bestOfFiveBtn");
const bestOfTenBtn = document.getElementById("bestOfTenBtn");


// Event listeners for the game limit buttons
bestOfThreeBtn.addEventListener("click", function() {
    closeModal();
    startGame(3); // Start the game with a limit of 3 rounds
});

bestOfFiveBtn.addEventListener("click", function() {
    closeModal(); 
    startGame(5); // Start the game with a limit of 5 rounds
});

bestOfTenBtn.addEventListener("click", function() {
    closeModal();
    startGame(10); // Start the game with a limit of 10 rounds
});

// Call the displayModal function to show the modal when the page loads
displayModal();


// Function to display the modal
function displayModal() {
    modal.style.display = "block";
}

// Function to hide the modal
function closeModal() {
    modal.style.display = "none";
}
  // Get the buttons by their IDs
  const rockButton = document.getElementById("rock-button");
  const paperButton = document.getElementById("paper-button");
  const scissorButton = document.getElementById("scissor-button");

  // Add click event listeners to the buttons
  rockButton.addEventListener("click", () => play('rock'));
  paperButton.addEventListener("click", () => play('paper'));
  scissorButton.addEventListener("click", () => play('scissor'));

  /* Game Choice DIV */
  function showGameButton(){
    gameButtonsContainer.style.display = "block";
  }

  function hideGameButton(){
    gameButtonsContainer.style.display = "none";
  }