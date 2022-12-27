const field = document.createElement('div');
field.className = 'field';
document.body.append(field);
const emptyCell = document.createElement('div');
emptyCell.classList.add('cell', 'empty');

for (let i = 1; i <= 16; i++) {
  field.append(emptyCell);
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
  cell.onclick = function () {
    if (cell.nextElementSibling) {
      if (cell.nextElementSibling.classList.contains('empty')) {
        field.insertBefore(emptyCell, cell);
      } else if (cell.previousElementSibling.classList.contains('empty')) {
        field.insertBefore(cell, emptyCell);
      }
    }
  };
};
