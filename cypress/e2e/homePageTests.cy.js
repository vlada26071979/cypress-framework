const { cartPage } = require("../page-objects/cartPage");
const { homePage } = require("../page-objects/homePage");

beforeEach('Open application', () => {
    cy.openApplication(); 
});


describe('Home page tests', () => {
    it('Verify user can subscribe successfully from Home Page', () => {
       cy.scrollTo('bottom')
       cy.verifyTextIsDisplayed(homePage.headerSubscription)
       homePage.subscribe("ifeani.emeghara17@gmail.com")
       cy.contains('You have been successfully subscribed!').should('be.visible')
    });

    it('Verify user can subscribe successfully from Cart Page', () => {
        homePage.goToCartPage()
        cartPage.subscribe("ninalimuzina@gmail.com")
    });

});