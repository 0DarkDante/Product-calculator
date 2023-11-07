let name   = document.querySelector('#name');
let price  = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table');
let total  = document.querySelector('#total');

function createCell(row, value, className) {
  let cell = document.createElement('td');
  cell.textContent = value;
  cell.classList.add(className);
  row.appendChild(cell);
}

add.addEventListener('click', function() {
  let tr = document.createElement('tr');
  
  createCell(tr, name.value, 'name');
  createCell(tr, price.value, 'price');
  createCell(tr, amount.value, 'amount');
  let cost = price.value * amount.value;
  createCell(tr, cost, 'cost');
  
  let removeCell = document.createElement('td');
  removeCell.textContent = 'удалить';
  removeCell.classList.add('remove');
  removeCell.addEventListener('click', function() {
    tr.remove();
    updateTotal();
  });
  tr.appendChild(removeCell);
  
  table.appendChild(tr);
  updateTotal();
});


