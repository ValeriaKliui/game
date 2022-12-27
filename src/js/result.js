const buttonsContainer = document.querySelector('.buttons-container');
const stopButton = document.querySelector('.stop-button');
const restartButton = document.querySelector('.restart-button');

const resultButton = document.createElement('button');
resultButton.classList.add('result-button');
resultButton.textContent = 'result';
buttonsContainer.append(resultButton);

const infoContainer = document.querySelector('.info');
const moves = document.createElement('p');
moves.classList.add('moves');
moves.textContent = '0 moves';
infoContainer.append(moves);

const field = document.querySelector('.field');
let i = 0;
field.onclick = () => {
  if (!stopButton.disabled) {
    i++;
    moves.textContent = `${i} moves`;
    restartButton.addEventListener('click', showZeroMoves);
  }
};

function showZeroMoves () {
  i = 0;
  moves.textContent = `${i} moves`;
};
