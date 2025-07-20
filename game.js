let player1Pos = 0;
let player2Pos = 0;
let currentPlayer = 1;

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice-result").innerText = `Roll: ${roll}`;

  if (currentPlayer === 1) {
    player1Pos += roll;
    document.getElementById("position1").innerText = `Player 1 Position: ${player1Pos}`;
    if (player1Pos >= 30) {
      document.getElementById("winner").innerText = "🎉 Player 1 Wins!";
      disableGame();
      return;
    }
    currentPlayer = 2;
    document.getElementById("turn").innerText = "Player 2's Turn";
  } else {
    player2Pos += roll;
    document.getElementById("position2").innerText = `Player 2 Position: ${player2Pos}`;
    if (player2Pos >= 30) {
      document.getElementById("winner").innerText = "🎉 Player 2 Wins!";
      disableGame();
      return;
    }
    currentPlayer = 1;
    document.getElementById("turn").innerText = "Player 1's Turn";
  }
}

function disableGame() {
  document.querySelector("button").disabled = true;
}
