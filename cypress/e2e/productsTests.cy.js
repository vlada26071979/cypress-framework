const { homePage } = require("../page-objects/homePage");

beforeEach('Open application', () => {
    cy.openApplication(); 
});


describe('Test cases on the Products page', () => {
    it('Verify all products are displayed', () => {
        homePage.goToProductsPage();

        cy.log('🔹 Verifying that all 34 products are displayed')
        cy.get('.single-products')
        .should('be.visible')
        .should('have.length', 34);
    });

});