function totalPrice(){
const prices = document.querySelectorAll(".price");
let priceTotal = 0;
prices.forEach((price)=>{
	 priceTotal = priceTotal + parseInt(price.innerText);
});


const newRow = document.createElement("tr");
const newCell = document.createElement("td");

      newCell.textContent = priceTotal;
	newCell.setAttribute("data-ns-test","grandTotal")
    newRow.appendChild(newCell);

	const tablebody = document.querySelector("tbody");
	tablebody.appendChild(newRow);

	
};

totalPrice();


