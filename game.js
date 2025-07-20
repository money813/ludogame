let player1Pos = 0;
let player2Pos = 0;
let currentPlayer = 1;
let coins1 = 200;
let coins2 = 200;
let gameStarted = false;

function updateUI() {
  document.getElementById("coins1").innerText = coins1;
  document.getElementById("coins2").innerText = coins2;
  document.getElementById("position1").innerText = `Player 1 Position: ${player1Pos}`;
  document.getElementById("position2").innerText = `Player 2 Position: ${player2Pos}`;
}

function startGame() {
  if (coins1 >= 50 && coins2 >= 50) {
    coins1 -= 50;
    coins2 -= 50;
    gameStarted = true;
    updateUI();
    document.getElementById("turn").innerText = "Player 1's Turn";
    document.getElementById("roll-btn").disabled = false;
  } else {
    alert("Both players must have at least 50 coins!");
  }
}

function rollDice() {
  if (!gameStarted) return;

  const roll = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice-result").innerText = `Roll: ${roll}`;

  if (currentPlayer === 1) {
    player1Pos += roll;
    document.getElementById("position1").innerText = `Player 1 Position: ${player1Pos}`;
    if (player1Pos >= 30) {
      document.getElementById("winner").innerText = "🎉 Player 1 Wins ₦80!";
      coins1 += 80;
      endGame();
      return;
    }
    currentPlayer = 2;
    document.getElementById("turn").innerText = "Player 2's Turn";
  } else {
    player2Pos += roll;
    document.getElementById("position2").innerText = `Player 2 Position: ${player2Pos}`;
    if (player2Pos >= 30) {
      document.getElementById("winner").innerText = "🎉 Player 2 Wins ₦80!";
      coins2 += 80;
      endGame();
      return;
    }
    currentPlayer = 1;
    document.getElementById("turn").innerText = "Player 1's Turn";
  }

  updateUI();
}

function endGame() {
  gameStarted = false;
  document.getElementById("roll-btn").disabled = true;
  updateUI();
}
