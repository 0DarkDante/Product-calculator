let name   = document.querySelector('#name');
let price  = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table');
let total  = document.querySelector('#total');

function createCell(value, className) {
  let cell = document.createElement('td');
  cell.textContent = value;
  cell.classList.add(className);
  return cell;
}

function recountTotal() {
	let costs = table.querySelectorAll('.cost');
  
	if (costs) {
    let sum = 0;

    for(let cost of costs) {
      cost = Number(cost.textContent);
      sum += cost;
    }
    total.textContent = sum;
	}
}

add.addEventListener('click', function() {
  let tr = document.createElement('tr');
  
  tr.appendChild(createCell(name.value, 'name'));
  tr.appendChild(createCell(price.value, 'price'));
  tr.appendChild(createCell(amount.value, 'amount'));
  let cost = price.value * amount.value;
  tr.appendChild(createCell(cost, 'cost'));
  
  let removeCell = document.createElement('td');
  removeCell.textContent = 'удалить';
  removeCell.classList.add('remove');
  removeCell.addEventListener('click', function() {
    tr.remove();
    recountTotal();
  });
  tr.appendChild(removeCell);
  
  table.appendChild(tr);
  recountTotal();
});



