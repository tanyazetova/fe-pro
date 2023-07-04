function handleCellClick(event) {
  const { target } = event;

  if (target.tagName === 'TD') {
    const cell = target;
    const currentText = cell.innerText;
    cell.innerText = '';

    const textarea = document.createElement('textarea');
    textarea.value = currentText;

    const saveButton = createButton('Save');
    const cancelButton = createButton('Cancel');

    cell.appendChild(textarea);
    cell.appendChild(saveButton);
    cell.appendChild(cancelButton);

    saveButton.addEventListener('click', () => saveChanges(cell, textarea));
    cancelButton.addEventListener('click', () =>
      cancelEditing(cell, currentText)
    );
  }
}

function createButton(text) {
  const button = document.createElement('button');
  button.textContent = text;
  return button;
}

function saveChanges(cell, textarea) {
  cell.innerText = textarea.value;
}

function cancelEditing(cell, previousText) {
  cell.innerText = previousText;
}

document.getElementById('table').addEventListener('click', handleCellClick);
