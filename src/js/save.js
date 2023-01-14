const buttonsContainer = document.querySelector('.buttons-container');

const saveButton = document.createElement('button');
saveButton.classList.add('save-button');
saveButton.textContent = 'save';
buttonsContainer.append(saveButton);

saveButton.onclick = () => {
  const cells = document.querySelectorAll('.cell');
  for (let i = 0; i < cells.length; i++) {
    localStorage.setItem(i, cells[i].innerText);
  };
};
