// Define the maximum number of retries and current retry count
const maxRetries = 3;
let currentRetries = 0;

// Function to handle player inactivity
function handlePlayerInactivity() {
    currentRetries++;
    if (currentRetries >= maxRetries) {
        // End the game due to excessive inactivity
        document.getElementById("game-result").textContent = "Player inactivity: Game Over";
        resetGame(); // You can reset the game or take any other action here
    }
}

// Reset retry count whenever the player makes a move
function resetRetryCount() {
    currentRetries = 0;
}
