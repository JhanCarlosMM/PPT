const options = ['piedra', 'papel', 'tijeras'];

// Contadores de puntos
let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  const resultElement = document.getElementById('result');

  let resultMessage = '';
  let resultClass = '';

  // Lógica del resultado
  if (playerChoice === computerChoice) {
    resultMessage = `Empate 🤝. Ambos eligieron ${playerChoice}.`;
    resultClass = 'alert-secondary';
  } else if (
    (playerChoice === 'piedra' && computerChoice === 'tijeras') ||
    (playerChoice === 'papel' && computerChoice === 'piedra') ||
    (playerChoice === 'tijeras' && computerChoice === 'papel')
  ) {
    resultMessage = `¡Ganaste! 🎉 Tú elegiste ${playerChoice} y la computadora eligió ${computerChoice}.`;
    resultClass = 'winner';
    playerScore++;
  } else {
    resultMessage = `Perdiste 😢. Tú elegiste ${playerChoice} y la computadora eligió ${computerChoice}.`;
    resultClass = 'loser';
    computerScore++;
  }

  // Actualizar resultado en pantalla
  resultElement.textContent = resultMessage;
  resultElement.className = `alert ${resultClass}`;

  // Actualizar puntuaciones
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function resetGame() {
  const resultElement = document.getElementById('result');
  resultElement.textContent = '¡Haz tu elección para comenzar el juego!';
  resultElement.className = 'alert alert-secondary';

  // Reiniciar puntuaciones
  playerScore = 0;
  computerScore = 0;
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}
