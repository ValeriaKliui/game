const container = document.createElement('div');
container.classList.add('container-time');
document.body.append(container);

const timer = document.createElement('p');
timer.classList.add('timer');
timer.textContent = '0:0:0';
container.append(timer);

const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');
document.body.append(buttonsContainer);
const startButton = document.createElement('button');
const stopButton = document.createElement('button');
buttonsContainer.append(startButton, stopButton);
startButton.classList.add('start-button');
startButton.textContent = 'start';
stopButton.classList.add('stop-button');
stopButton.textContent = 'stop';
stopButton.disabled = true;
let timerId;
startButton.onclick = () => {
  stopButton.disabled = false;
  let i = 0;
  timerId = setInterval(() => {
    i++;
    timer.textContent = `0:0:${i}`;
  }, '1000'
  );
  startButton.disabled = true;
};
stopButton.onclick = () => {
  clearInterval(timerId);
  startButton.disabled = false;
  stopButton.disabled = true;
};
