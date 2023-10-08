// Get all elements with data-ns-test="prices"
const priceElements = document.querySelectorAll('[data-ns-test="prices"]');

// Function to calculate and update the total price
function updateTotal() {
    let totalPrice = 0;
    
    // Loop through the price elements and sum their values
    priceElements.forEach((element) => {
        totalPrice += parseFloat(element.textContent);
    });
    
    // Get the grand total element
    const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');
    
    // Update the grand total element with the calculated total price
    grandTotalElement.textContent = totalPrice.toFixed(2);
}

// Call the updateTotal function to calculate and display the initial total
updateTotal();
