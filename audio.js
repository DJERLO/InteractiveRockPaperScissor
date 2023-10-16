// Get the game-option elements
const gameOptions = document.querySelectorAll(".rock, .paper, .scissor");

// Add event listeners to play sound on hover
gameOptions.forEach((gameOption) => {
  gameOption.addEventListener("mouseover", playHoverSound);
});

// Add event listeners to play sound on hover
gameOptions.forEach((gameOption) => {
  gameOption.addEventListener("click", playClickSound);
});

// Function to play Hover sound
function playHoverSound() {
    
    const hoverSound = new Audio("SFX/hover.mp3");  // Create an Audio object and set the source to the hover sound file
    hoverSound.play();  // Play the hover sound effect
    
}
// Function to play Click sound
function playClickSound(){
  // Create an Audio object and set the source to the click sound file
  const clickSound = new Audio("SFX/click.mp3");
  clickSound.play();   // Play the click sound effect
}

// Function to play Win sound
function playPlayer1WinsSound() {
  // Create an Audio object and set the source to the win sound file
  const winSound = new Audio("SFX/player1wins.mp3");
  winSound.play();   // Play the win sound effect
}

// Function to play Win sound
function playPlayer2WinsSound() {
  // Create an Audio object and set the source to the win sound file
  const winSound = new Audio("SFX/player2wins.mp3");
  winSound.play();   // Play the win sound effect
}


