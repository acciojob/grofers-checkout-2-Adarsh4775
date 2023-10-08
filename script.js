//your code here
let priceElement = document.getElementById("data-ns-prices");
let totalPrice = 0;

priceElement.forEach((priceElement)=>
	let price = parseInt(priceElement.textContent);
			totalPrice += price;		 
	);

let newRow = document.createElement("tr");
let newCell = document.createElement("td");

newCell.textContent= `Total: $${totalPrice.toFixed(2)}`;

newRow.appendChild(newCell);
let table = document.getElementByTagname("table");
table.appendChild(newRow);

caluculateTotalPrice();
