function drawTable(size) {
  const table = document.querySelector('table');
  let count = 0;

  for (let row = 1; row <= size; row++) {
    const tr = document.createElement('tr');

    for (let col = 1; col <= size; col++) {
      count++;
      const td = document.createElement('td');
      td.innerText = count;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

drawTable(10);
