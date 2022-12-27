const cells = document.querySelectorAll('.field');

const container = document.createElement('div');
container.classList.add('info');
document.body.prepend(container);

const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');
document.body.prepend(buttonsContainer);

const restartButton = document.createElement('button');
const stopButton = document.createElement('button');
buttonsContainer.append(restartButton, stopButton);
restartButton.classList.add('restart-button');
restartButton.textContent = 'restart';
stopButton.classList.add('stop-button');
stopButton.textContent = 'stop';
stopButton.disabled = true;

const timer = document.createElement('div');
timer.classList.add('timer');
let seconds = 0;
let minutes = 0;
timer.textContent = `${minutes}:0${seconds}`;
container.append(timer);

let timerId;
for (const cell of cells) {
  cell.addEventListener('click', startTimer, { once: true });
}

function startTimer () {
  if (seconds > 0 || minutes > 0) {
    seconds = 0;
    minutes = 0;
  }
  stopButton.disabled = false;
  timerId = setInterval(() => {
    seconds++;
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }
    seconds < 10 ? timer.textContent = `${minutes}:0${seconds}` : timer.textContent = `${minutes}:${seconds}`;
  }, '1000'
  );
  restartButton.disabled = true;
}

stopButton.onclick = () => {
  clearInterval(timerId);
  restartButton.disabled = false;
  stopButton.disabled = true;
};

restartButton.onclick = () => {
  clearInterval(timerId);
  stopButton.disabled = false;
  startTimer();
  timer.textContent = `${minutes}:0${seconds}`;
  restartButton.disabled = true;
};
