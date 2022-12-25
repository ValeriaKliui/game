const field = document.createElement('div');
field.className = 'field';
document.body.append(field);

for (let i = 1; i <= 15; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  field.append(cell);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
shuffle(numbers);

function shuffle (arr) {
  arr.sort(() => Math.random() - 0.5);
  return arr;
}

const cells = document.querySelectorAll('.cell');
for (let i = 0; i < numbers.length; i++) {
  cells[i].textContent = numbers[i];
}

for (const cell of cells) {
  cell.onmousedown = function (event) {
    moveAt(event.pageX, event.pageY);
    function moveAt (pageX, pageY) {
      cell.style.left = (cell.clientHeight + 1) + 'px';
      cell.style.top = (cell.clientHeight + 1) + 'px';
    }
    function onMouseMove (event) {
      moveAt(event.pageX, event.pageY);
    }
    // передвигаем мяч при событии mousemove
    document.addEventListener('mousemove', onMouseMove);
    // отпустить мяч, удалить ненужные обработчики
    cell.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
      cell.onmouseup = null;
    };
  };
  cell.ondragstart = function () {
    return false;
  };
};
