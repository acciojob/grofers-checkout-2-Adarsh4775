//your code here
let priceElement = document.querySelectorAll("data-ns-prices");
let totalPrice = 0;

priceElement.forEach((priceElement)=>{
	let price = parseInt(priceElement.textContent);
			totalPrice += price;		 
});

let newRow = document.createElement("tr");
let newCell = document.createElement("td");

newCell.textContent= `Total: $${totalPrice.toFixed(2)}`;

newRow.appendChild(newCell);
let table = document.getElementsByTagname("table");
table.appendChild(newRow);

caluculateTotalPrice();
