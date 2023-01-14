const field = document.createElement('div');
field.className = 'field';
document.body.append(field);

for (let i = 0; i <= 15; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  field.append(cell);
}

makeField();

function shuffle (arr) {
  arr.sort(() => Math.random() - 0.5);
  return arr;
}
function makeField () {
  const cells = document.querySelectorAll('.cell');
  if (localStorage.length !== 0) {
    for (let i = 0; i < localStorage.length; i++) {
      cells[i].textContent = localStorage[i];
    }
    for (const cell of cells) {
      if (cell.innerText === '') cell.classList.add('empty');
    }
  } else {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];
    shuffle(numbers);

    for (let i = 0; i < numbers.length; i++) {
      cells[i].textContent = numbers[i];
    }
  }
  for (const cell of cells) {
    if (cell.classList.contains('empty')) cell.classList.remove('empty');
    if (cell.textContent === '') {
      cell.classList.add('empty');
    }
  }
  const emptyCell = document.querySelector('.empty');

  for (const cell of cells) {
    cell.onclick = function () {
      if (cell.nextElementSibling) {
        if (cell.nextElementSibling.classList.contains('empty')) {
          field.insertBefore(emptyCell, cell);
        } else if (cell.previousElementSibling.classList.contains('empty')) {
          field.insertBefore(cell, emptyCell);
        }
      } else if (cell.previousElementSibling.classList.contains('empty')) {
        field.insertBefore(cell, emptyCell);
      }
      if (cell.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling) {
        if (cell.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.contains('empty')) {
          emptyCell.replaceWith(cell);
          cell.nextElementSibling.nextElementSibling.nextElementSibling.after(emptyCell);
        } else if (cell.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.contains('empty')) {
          emptyCell.replaceWith(cell);
          cell.previousElementSibling.previousElementSibling.previousElementSibling.before(emptyCell);
        }
      };
    };
  }
}
export default makeField;
