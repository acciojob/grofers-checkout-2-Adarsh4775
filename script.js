describe("Price Calculation", () => {
    before(() => {
        // Visit the HTML page with your table
        cy.visit("index.html"); // Replace with the actual URL of your page
    });

    it("should check the number of prices", () => {
        // Ensure that there are at least three price elements
        cy.get('[data-ns-test=price]').should('have.length.at.least', 3);
    });

    it("should find the grand total element", () => {
        // Ensure that the grand total element exists
        cy.get('[data-ns-test=grandTotal]').should('exist');
    });

    it("should calculate the total correctly", () => {
        // Calculate the sum of prices
        cy.get('[data-ns-test=price]').then((priceElements) => {
            let sum = 0;
            priceElements.each((index, element) => {
                sum += parseFloat(element.textContent);
            });

            // Get the text content of the "grandTotal" element
            cy.get('[data-ns-test=grandTotal]').then((grandTotalElement) => {
                let sum_ = grandTotalElement.text();
                expect(parseFloat(sum_)).to.equal(sum); // Compare the calculated sum with the displayed sum
            });
        });
    });
});
