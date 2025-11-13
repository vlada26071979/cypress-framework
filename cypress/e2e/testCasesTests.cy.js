const { homePage } = require("../page-objects/homePage");

beforeEach('Open application', () => {
    cy.openApplication(); 
});



describe('Test cases on the Test cases page', () => {
    it('Verify test cases page is displayed', () => {
        homePage.goToTestCasesPage();
        cy.contains('h2', 'Test Cases').should('be.visible')
        cy.contains('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:')
        .should('be.visible')
    })
})