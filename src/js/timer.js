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
const seconds = 0;
const minutes = 0;
timer.textContent = `${minutes}:${seconds}`;
container.append(timer);
let timerId;
restartButton.onclick = () => {
  stopButton.disabled = false;
  let i = 0;
  timerId = setInterval(() => {
    i++;
    timer.textContent = `${minutes}:${i}`;
  }, '100'
  );
  restartButton.disabled = true;
};
stopButton.onclick = () => {
  clearInterval(timerId);
  restartButton.disabled = false;
  stopButton.disabled = true;
};
